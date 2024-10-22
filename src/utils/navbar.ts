import { GameData } from "../services/front-end-test/types";

export const getUniqueCategories = (data: GameData[]) => {
  // Extract all categories from the array of objects
  const allCategories = data.flatMap((item) => item.categories);

  // Define the specific categories to prioritize
  const priorityCategories = ["top", "new"];
  const otherCategories = ["ball", "virtual", "fun"];

  // Remove duplicates and create the initial array of objects
  const uniqueCategories = [...new Set(allCategories)].map((category) => ({
    name: priorityCategories.includes(category)
      ? `${category} games`
      : `${category}`,
    value: category.toLowerCase(),
  }));

  // Filter out the other categories
  const filteredCategories = uniqueCategories.filter(
    (category) => !otherCategories.includes(category.value)
  );

  // Add the other categories to the end of the array
  filteredCategories.push({
    name: "other",
    value: otherCategories.join(","),
  });

  // Sort the unique categories to prioritize 'top' and 'new'
  const sortedCategories = filteredCategories.sort((a, b) => {
    const aIndex = priorityCategories.indexOf(a.value);
    const bIndex = priorityCategories.indexOf(b.value);

    // If both are priority categories, compare their indices
    if (aIndex >= 0 && bIndex >= 0) {
      return aIndex - bIndex;
    }

    // If only a is a priority category, a comes first
    if (aIndex >= 0) return -1;
    // If only b is a priority category, b comes first
    if (bIndex >= 0) return 1;

    // If neither is a priority category, maintain original order
    return 0;
  });

  return sortedCategories;
};

import { useState } from "react";

// Helper function to update the URL search params
const updateSearchCategory = (value: string): void => {
  const url = new URL(window.location.href);

  // Set or update the "category" search parameter
  url.searchParams.set("category", value);

  // Update the URL without reloading the page
  window.history.replaceState({}, "", url.toString());
};

const initialCategory = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("category") || "top";
};

// Hook to handle category filtering
const useFilterCategory = () => {
  // Initialize state based on existing search params or default to "top"
  const [currentCategory, setCurrentCategory] = useState<string>(
    initialCategory()
  );

  // Update the category in both state and URL
  const setCategory = (category: string): void => {
    updateSearchCategory(category);
    setCurrentCategory(category);
  };

  return {
    setCategory,
    currentCategory,
  };
};

export default useFilterCategory;

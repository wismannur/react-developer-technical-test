import clsx from "clsx";
import { getUniqueCategories } from "../utils/navbar";
import { useContext } from "react";
import { GamesContext } from "../context/GamesContext";

const Navbar = () => {
  const context = useContext(GamesContext);
  const navbarItems = getUniqueCategories(context?.gameItems ?? []);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
      {navbarItems.map((item, idx) => (
        <li
          key={idx}
          className={clsx([
            "cols-span-1 px-6 py-4 text-white text-center capitalize",
            "cursor-pointer transition-colors duration-300 hover:bg-main-green",
            item.value === context?.currentCategory
              ? "bg-main-green"
              : "bg-main-black",
          ])}
          onClick={() => context?.setCategory(item.value)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

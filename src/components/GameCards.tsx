import clsx from "clsx";
import Ribbon from "./Ribbon";
import { useContext } from "react";
import { GamesContext } from "../context/GamesContext";
import { JackpotData } from "../services/front-end-test/types";

const JackpotBadge = ({ jackpotItem }: { jackpotItem?: JackpotData }) => {
  if (!jackpotItem) return null;

  return (
    <div className="bg-black/50 absolute w-full rounded-t-xl flex justify-center py-3">
      <span className="text-white font-bold">
        &euro; {new Intl.NumberFormat("en-DE").format(jackpotItem.amount)}
      </span>
    </div>
  );
};

const GameCards = () => {
  const context = useContext(GamesContext);

  return (
    <div
      className={clsx([
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8",
        "py-6 px-8 lg:p-10 container mx-auto",
      ])}
    >
      {context?.gameItems
        ?.filter((item) =>
          item.categories.some((category) =>
            [...(context?.currentCategory ?? "").split(",")].includes(category)
          )
        )
        .map((game) => (
          <div
            key={game.id}
            className={clsx([
              "cols-span-1 flex justify-center cursor-pointer relative",
              "transition-all duration-300 hover:scale-105 group",
            ])}
          >
            <div className="relative overflow-hidden w-full">
              <img
                src={game.image}
                alt={game.name}
                loading="lazy"
                className="rounded-xl w-full h-full object-cover"
              />
              <div className="absolute h-full w-full bg-black/50 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                <button className="bg-main-green text-white py-2 px-5 rounded-lg">
                  Play {game.name}
                </button>
              </div>
            </div>

            {/* jackpot badge */}

            <JackpotBadge
              jackpotItem={context?.jackpotItems?.find(
                (jackpot) => jackpot.game === game.id
              )}
            />

            {/* top and new - bage */}
            {game.categories.includes("new") && <Ribbon text="new" />}
            {game.categories.includes("top") && <Ribbon text="top" />}
          </div>
        ))}
    </div>
  );
};

export default GameCards;

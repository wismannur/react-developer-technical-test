import { ReactNode, useEffect } from "react";
import { GamesContext } from "./GamesContext";
import useFilterCategory from "../hooks/useFilterCategory";
import { getGames, getJackpots } from "../services/front-end-test";
import { GameData, JackpotData } from "../services/front-end-test/types";
import useFetch from "../hooks/useFetch";
import { callFunctionWithInterval } from "../utils/misc";

export const GamesProvider = ({ children }: { children: ReactNode }) => {
  const { data: gameItems } = useFetch<GameData[]>(getGames);
  const { data: jackpotItems, refetch: refetchJackpot } =
    useFetch<JackpotData[]>(getJackpots);

  const { setCategory, currentCategory } = useFilterCategory();

  useEffect(() => {
    callFunctionWithInterval(refetchJackpot);
  }, []);

  return (
    <GamesContext.Provider
      value={{ setCategory, currentCategory, gameItems, jackpotItems }}
    >
      {children}
    </GamesContext.Provider>
  );
};

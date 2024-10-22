import { createContext } from "react";
import { GameData, JackpotData } from "../services/front-end-test/types";

type GamesContextType = {
  currentCategory: string;
  setCategory: (category: string) => void;
  gameItems: GameData[] | null;
  jackpotItems: JackpotData[] | null;
};

export const GamesContext = createContext<GamesContextType | undefined>(
  undefined
);

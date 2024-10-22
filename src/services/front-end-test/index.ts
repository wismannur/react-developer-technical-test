import { API_URL } from "@/config";
import { fetchAPI } from "../utils";

const BASE_URL = `${API_URL}/front-end-test`;

export const getGames = () => fetchAPI(`${BASE_URL}/games.php`);

export const getJackpots = () => fetchAPI(`${BASE_URL}/jackpots.php`);

import { getGameByID } from "./details.js";
import { getGamesByCategory, getGenreName } from "./games.js";
import { Item } from "./ui.js";

export const row = document.querySelector(".row");
export const navItems = document.querySelectorAll(".nav-item");
export const detailScreen = document.querySelector(".details-screen");
export const gameImage = document.querySelector("#game-image");
export const gameTitle = document.querySelector("#game-title");
export const gameCategory = document.querySelector("#game-category");
export const gameOS = document.querySelector("#game-OS");
export const gameStatus = document.querySelector("#game-Status");
export const gameDescription = document.querySelector("#game-description");
export const gameLink = document.querySelector("#game-link");


// console.log(navItems);

// getGameByID(295);

getGamesByCategory("mmorpg");
getGenreName(navItems);


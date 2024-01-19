import { gameImage } from "./main.js";




export async function getGameByID(gameID) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "536c521213msh21ba3954fa26d41p1a075fjsn09e1804edbd4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`,
    options
  );

  const response = await api.json();

  console.log(response);

  let game = {
  
}


  
}



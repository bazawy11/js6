import { row } from "./main.js";
import { Item } from "./ui.js";

export async function getGamesByCategory(gameType) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "536c521213msh21ba3954fa26d41p1a075fjsn09e1804edbd4",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gameType}`,
    options
  );

  const response = await api.json();

  for (let i = 0; i < response.length; i++) {
    let item = new Item({
      id: response[i].id,
      title:response[i].title,
      description:response[i].short_description,
      source:response[i].thumbnail,
      platform:response[i].platform,
      genre:response[i].genre
    }
    );

    row.appendChild(item.createCard());
  }
}

export function getGenreName(navItems) {
    
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", (eventInfo) => {
        handler();
      row.innerHTML = "";
      eventInfo.target.classList.add("active");
      getGamesByCategory(eventInfo.target.childNodes[0].data);

    });
  }
}

export function handler() {
  for (const li of document.querySelectorAll("li .active")) {
    li.classList.remove("active");
  }
}


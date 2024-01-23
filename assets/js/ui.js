import { getGameByID } from "./details.js";

export class Item {
  constructor({
    id,
    title,
    description,
    source,
    platform,
    genre,
    thumbnail,
    gameURL,
    status,
    fullDescription,
  }) {
    //   super();
    this.id = id;
    this.title = title;
    this.description = description;
    this.source = source;
    this.platform = platform;
    this.genre = genre;
    this.thumbnail = thumbnail;
    this.gameURL = gameURL;
    this.status = status;
    this.fullDescription = fullDescription;

    // this.d = function () {
    //   console.log();
    // };
  }

  createCard() {
    let element = document.createElement("div");
    element.classList.add("item", "col-sm-6", "col-md-4", "col-lg-3");
    // let card = document.createElement("div");
    //   element.classList.add("card", "h-100", "bg-transparent");

    element.innerHTML = `
      <div class="card h-100 bg-transparent" role="button">
            <div class="card-body">
              <figure class="position-relative">
                <img
                  class="card-img-top object-fit-cover h-100"
                  src=${this.source}
                />
              </figure>

              <figcaption>
                <div class="hstack justify-content-between">
                  <h3 class="h6 small text-white">${this.title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
                </div>

                <p class="text-white card-text small text-center opacity-50">
                 ${this.description}
                </p>
              </figcaption>
            </div>

            <footer class="card-footer small hstack justify-content-between">
              <span class="badge ">${this.genre}</span>
              <span class="badge ">${this.platform}</span>
            </footer>
          </div>
      `;
    element.addEventListener("click", (eventInfo) => {
      getGameByID(this.id);
    });
    return element;
  }

  openPage() {
    let page = document.querySelector(".details-screen");

    page.classList.remove("d-none");
    page.innerHTML = `<section class="details">
    <div class="container">
    <header class="hstack justify-content-between">
    <h1 class="text-center h3 py-4">Details Game</h1>
    <button class="btn-close btn-close-white" id="btnClose"></button>
    </header>
    <div class="row g-4" id="detailsContent">
    <div class="col-md-4">
    <img
              id="game-image"
                src=${this.thumbnail}
                class="w-100"
                alt="image details"
                />
            </div>
            <div class="col-md-8">
            <h3 id="game-title">Title: ${this.title}</h3>
            <p>
            Category: <span id="game-category" class="badge text-bg-info"> ${this.genre}</span>
              </p>
              <p>Platform: <span id="game-OS" class="badge text-bg-info"> ${this.platform}</span></p>
              <p class="">
                Status: <span id="game-Status" class="badge text-bg-info"> ${this.status}</span>
              </p>
              <p id="game-description" class="small">
               ${this.fullDescription}
              </p>
              <a
                class="btn btn-outline-warning"
                target="_blank"
                id="game-link"
                href=${this.gameURL}
                >Show Game</a
                >
                </div>
          </div>
          </div>
          </section>`;

    let clsBtn = document.querySelector("#btnClose");
    clsBtn.addEventListener("click", function (eventInfo) {
      page.classList.add("d-none");
    });
  }
}

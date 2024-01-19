export class Item {
  constructor(id, title, description, source, platform, genre) {
    //   super();
    this.id = id;
    this.title = title;
    this.description = description;
    this.source = source;
    this.platform = platform;
    this.genre = genre;
    this.d = function () {
      console.log();
    };
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
      console.log(eventInfo.target);
    });
    return element;
  }

  openPage() {}
}

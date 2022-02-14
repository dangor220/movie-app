const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8666d278a7d1095a199fde0e641cff6a";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  showData(data);
}
getData();

const main = document.querySelector(".main__container");

function showData(data) {
  const arrPopularMovie = data.results;
  main.innerHTML = "";

  arrPopularMovie.map((item) => {
    main.insertAdjacentHTML(
      "beforeend",
      `
    
      <div class="film__wrapper">
      <div class="film__poster-wrapper">
      <img class="film__poster" src="https://image.tmdb.org/t/p/w1280${item["poster_path"]}" alt="${item["title"]}">
      </div>
      <div class="film__about-film">
        <p class="film__name">${item["title"]}</p>
        <span class="film__raiting">${item["vote_average"]}</span>
      </div>
      <div class="film__descr">
          <div class="film__descr-overview">Overview</div>
          ${item["overview"]}
      </div>
    </div>

    `
    );
  });
}

// search events

const searchItem = document.querySelector(".header__form-search");
const searchButton = document.querySelector(".header__search-icons");
const logo = document.querySelector(".header__logo");

logo.addEventListener("click", searchFilms);
searchButton.addEventListener("click", searchFilms);
searchItem.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    searchFilms(e);
  }
});

function searchFilms(e) {
  let inputValue = searchItem.value;

  if (
    e.target.classList.contains("header__logo") ||
    e.target.classList.contains("header__logo_app")
  ) {
    inputValue = "";
  }

  if (inputValue !== "") {
    let searchUrl = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=8666d278a7d1095a199fde0e641cff6a`;

    async function getSearchFilms() {
      const res = await fetch(searchUrl);
      const data = await res.json();

      showData(data);
    }
    getSearchFilms();
  } else {
    searchItem.value = "";
    const url =
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8666d278a7d1095a199fde0e641cff6a";

    async function getData() {
      const res = await fetch(url);
      const data = await res.json();

      showData(data);
    }
    getData();
  }

  searchItem.addEventListener("click", () => {
    let checkInput = searchItem.value;
    searchItem.value = "";
    if (checkInput !== "") {
      const url =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8666d278a7d1095a199fde0e641cff6a";

      async function getData() {
        const res = await fetch(url);
        const data = await res.json();

        showData(data);
      }
      getData();
    }
  });
}

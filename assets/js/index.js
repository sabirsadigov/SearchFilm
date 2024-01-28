document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("card_container");
  const apiKey = "7452b26ac45c54daa944451a15a9eac4";
  const searchBtn = document.getElementById("search-btn");
  const input = document.getElementById("input");
  allData();
  function allData() {
    const baseUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => updateDisplay(data.results));
  }
  function updateDisplay(movie) {
    movie.forEach((item) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.insertAdjacentHTML(
        "beforeend",
        `<img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="" />
          <h2>${item.title}</h2>
          <span>IMDB:${item.vote_average}</span>
          `
      );
      container.appendChild(card);
    });
  }
  function searchMovie(searchMovi) {
    const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchMovi}`;
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => updateDisplay(data.results));
  }
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const query = input.value;
    container.innerHTML = "";
    searchMovie(query);
  });
});

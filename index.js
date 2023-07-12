const apiKey = "6f9a9606a772889163dabf987ae73655";
const apiEndpoint = "https://api.themoviedb.org/3";
const imgPath = "https://api.themoviedb.org/3/movie/{movie_id}/images
"

const apiPath = {
  fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apiKey}`,
  fetchMoviesList: (id) => `${apiEndpoint}discover/movie?api_key=6f9a9606a772889163dabf987ae73655&append_to_response=videos`
};


function init() {
  fetch(apiPath.fetchAllCategories)
    .then((res) => res.json())
    .then((res) => console.log(res.genres))
    .catch((err) => console.error(err));
}

window.addEventListener("load", function () {
  init();
});

function fetchAndbuildMovieSection(fetchUrl, category){
    console.log(fetchUrl,category);
    fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        const movies = res.results;
        if (Array.isArray(movies) && movies.length) {
            buildMoviesSection(movies.slice(0, 6), category.name);
        }
    })

}
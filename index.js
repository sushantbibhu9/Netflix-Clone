const apiKey = "6f9a9606a772889163dabf987ae73655";
const apiEndpoint = "https://api.themoviedb.org/3";

const apiPath = {
  fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apiKey}`,
};
function init() {
  fetch(apiPath.fetchAllCategories)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

window.addEventListener();

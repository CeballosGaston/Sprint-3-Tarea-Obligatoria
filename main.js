

const API_URL = "https://jsonplaceholder.typicode.com/posts";
let currentPage = 1;
const itemsPerPage = 10;

const apiSelector = document.getElementById("fetchOrAxios");
const searchInput = document.getElementById("searchInput");
const fetchButton = document.getElementById("getDataBtn");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");
const resultsContainer = document.getElementById("results");
const paginationContainer = document.getElementById("paginationContainer");
const numberButtons = document.getElementById("number-btns");

fetchButton.addEventListener("click", fetchData);

function showLoading() {
  loadingElement.removeAttribute("hidden");
}


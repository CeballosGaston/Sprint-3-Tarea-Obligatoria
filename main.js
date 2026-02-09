

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

function createCard() {
  const card = document.createElement("div");
  card.classList.add("cardClass");
  return card;
}

function cleanResultContainer() {
  resultsContainer.innerHTML = "";
}
function cleanPaginationContainer() {
  paginationContainer.innerHTML = "";
}

function showError(message) {
  errorElement.innerHTML = message;
  errorElement.removeAttribute("hidden");
}

function hideLoading() {
  loadingElement.classList.add("hidden");
}

function hideError() {
  errorElement.classList.add("hidden");
}

// Funció principal per obtenir dades (a implementar)
async function fetchData() {
  const searchTerm = searchInput.value;
  const useAxios = apiSelector.value === "axios";

  showLoading();
  hideError();

  try {
    if (useAxios) {
      await fetchDataWithAxios(searchTerm);
    } else {
      await fetchDataWithFetch(searchTerm);
    }
  } catch (error) {
    console.log(error);
    showError(`Error inesperado`);
  } finally {
    hideLoading();
  }
}

// Funció per a la visualització dels resultats i la paginació (a implementar)
function displayResults(items, totalItems) {
  cleanResultContainer();

  items.forEach((element) => {
    const card = createCard();
    const paragraph = document.createElement("p");
    paragraph.textContent = element.body;
    card.appendChild(paragraph);
    resultsContainer.appendChild(card);
  });

  setupPagination(totalItems);
}

function setupPagination(totalItems) {
  cleanPaginationContainer();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("page-btn");
    paginationContainer.appendChild(button);
    button.addEventListener("click", () => {
      currentPage = i;
      fetchData();
    });
    if (i === currentPage) {
      button.disabled = true;
    }

    paginationContainer.appendChild(button);
  }

  // ... (Implementa la lògica per crear els botons de paginació)
}


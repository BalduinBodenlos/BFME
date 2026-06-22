document.addEventListener("DOMContentLoaded", () => {
  initHomepage();
  initMapControls();
});

function initHomepage() {
  const enterButton = document.querySelector("#friend-button");

  if (!enterButton) {
    return;
  }

  const portalScreen = document.querySelector("#portal-screen");
  const homepageScreen = document.querySelector("#homepage-screen");
  const menuMusic = document.querySelector("#menu-music");
  const audioMessage = document.querySelector("#audio-message");

  if (!portalScreen || !homepageScreen || !menuMusic) {
    return;
  }

  function showAudioMessage() {
    if (audioMessage) {
      audioMessage.hidden = false;
    }
  }

  menuMusic.addEventListener("error", showAudioMessage);

  enterButton.addEventListener("click", () => {
    portalScreen.classList.add("hidden");
    homepageScreen.classList.remove("hidden");

    menuMusic.volume = 0.45;

    const playMusic = menuMusic.play();

    if (playMusic !== undefined) {
      playMusic.catch(() => {
        showAudioMessage();
      });
    }
  });
}

function initMapControls() {
  const mapList = document.querySelector("#map-list");

  if (!mapList) {
    return;
  }

  const searchInput = document.querySelector("#map-search");
  const sortSelect = document.querySelector("#map-sort");
  const creepFilter = document.querySelector("#creep-filter");
  const resetButton = document.querySelector("#reset-map-controls");
  const resultCount = document.querySelector("#map-result-count");

  if (!searchInput || !sortSelect || !creepFilter || !resetButton) {
    return;
  }

  const mapArticles = Array.from(mapList.querySelectorAll("article"));

  function getMapName(article) {
    return article.dataset.name.toLowerCase();
  }

  function getPlayerCount(article) {
    return Number(article.dataset.players);
  }

  function getYear(article) {
    const year = Number(article.dataset.year);

    if (Number.isNaN(year)) {
      return null;
    }

    return year;
  }

  function compareNames(firstArticle, secondArticle) {
    return getMapName(firstArticle).localeCompare(getMapName(secondArticle));
  }

  function compareYears(firstArticle, secondArticle, direction) {
    const firstYear = getYear(firstArticle);
    const secondYear = getYear(secondArticle);

    if (firstYear === null && secondYear === null) {
      return compareNames(firstArticle, secondArticle);
    }

    if (firstYear === null) {
      return 1;
    }

    if (secondYear === null) {
      return -1;
    }

    return (firstYear - secondYear) * direction || compareNames(firstArticle, secondArticle);
  }

  function sortMaps() {
    const sortValue = sortSelect.value;

    const sortedArticles = [...mapArticles].sort((firstArticle, secondArticle) => {
      const firstName = getMapName(firstArticle);
      const secondName = getMapName(secondArticle);
      const firstPlayers = getPlayerCount(firstArticle);
      const secondPlayers = getPlayerCount(secondArticle);

      if (sortValue === "players-asc") {
        return firstPlayers - secondPlayers || compareNames(firstArticle, secondArticle);
      }

      if (sortValue === "players-desc") {
        return secondPlayers - firstPlayers || compareNames(firstArticle, secondArticle);
      }

      if (sortValue === "name-asc") {
        return firstName.localeCompare(secondName);
      }

      if (sortValue === "name-desc") {
        return secondName.localeCompare(firstName);
      }

      if (sortValue === "year-asc") {
        return compareYears(firstArticle, secondArticle, 1);
      }

      if (sortValue === "year-desc") {
        return compareYears(firstArticle, secondArticle, -1);
      }

      return 0;
    });

    sortedArticles.forEach((article) => {
      mapList.appendChild(article);
    });
  }

  function filterMaps() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCreep = creepFilter.value.toLowerCase();
    let visibleMaps = 0;

    mapArticles.forEach((article) => {
      const articleText = article.textContent.toLowerCase();
      const articleCreeps = article.dataset.creeps.toLowerCase();
      const matchesSearch = articleText.includes(searchTerm);
      const matchesCreep = selectedCreep === "all" || articleCreeps.includes(selectedCreep);

      if (matchesSearch && matchesCreep) {
        article.hidden = false;
        visibleMaps += 1;
      } else {
        article.hidden = true;
      }
    });

    if (resultCount) {
      resultCount.textContent = `${visibleMaps} of ${mapArticles.length} maps shown`;
    }
  }

  function updateMapList() {
    sortMaps();
    filterMaps();
  }

  searchInput.addEventListener("input", updateMapList);
  sortSelect.addEventListener("change", updateMapList);
  creepFilter.addEventListener("change", updateMapList);

  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    sortSelect.value = "players-asc";
    creepFilter.value = "all";

    updateMapList();
  });

  updateMapList();
}

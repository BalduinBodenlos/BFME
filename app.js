// app.js
// This file contains the JavaScript for the BFME II Archive website.
//
// JavaScript is used here because HTML and CSS alone cannot:
// - react to clicks
// - start music after user interaction
// - search through map entries
// - sort map entries
// - filter map entries
// - dynamically hide and show content
//
// We use vanilla JavaScript only.
// That means: no frameworks, no libraries, no backend.

// =====================================================
// Homepage entrance portal and music
// =====================================================

// document.addEventListener("DOMContentLoaded", ...)
// This waits until the HTML page has fully loaded.
// We do this because JavaScript can only select HTML elements
// after they exist in the document.
//
// Alternative:
// We could place the script at the very end of the body.
// We already do that, but DOMContentLoaded is still a safe habit.
document.addEventListener("DOMContentLoaded", () => {
  // const creates a variable that should not be reassigned later.
  //
  // document.querySelector("#friend-button")
  // searches the HTML document for the element with id="friend-button".
  //
  // This is the clickable word "friend" in the portal sentence.
  const enterButton = document.querySelector("#friend-button");

  // This selects the whole portal screen.
  // The portal is the first thing the user sees.
  const portalScreen = document.querySelector("#portal-screen");

  // This selects the actual homepage screen.
  // At the beginning, it is hidden with the CSS class "hidden".
  const homepageScreen = document.querySelector("#homepage-screen");

  // This selects the audio element from index.html.
  // The audio file is the RotWK-style menu music.
  const menuMusic = document.querySelector("#menu-music");

  // This is a safety check.
  //
  // The same app.js file is used on multiple pages.
  // For example, maps.html does not have a friend button or menu music.
  //
  // If one of these homepage elements does not exist,
  // the function stops here with return.
  //
  // Without this check, JavaScript would throw errors on pages
  // where these elements do not exist.
  if (!enterButton || !portalScreen || !homepageScreen || !menuMusic) {
    return;
  }

  // addEventListener("click", ...)
  // tells JavaScript:
  // "When the user clicks the friend button, run this code."
  //
  // This click is important because browsers usually block music
  // that starts automatically without user interaction.
  enterButton.addEventListener("click", () => {
    // classList.add("hidden")
    // adds the CSS class "hidden" to the portal.
    //
    // In CSS, .hidden means display: none.
    // So the portal disappears.
    portalScreen.classList.add("hidden");

    // classList.remove("hidden")
    // removes the CSS class "hidden" from the homepage.
    //
    // The homepage becomes visible.
    homepageScreen.classList.remove("hidden");

    // This sets the music volume.
    // 0.45 means 45% volume.
    //
    // Alternative:
    // We could use 1.0 for full volume,
    // but that might be too loud for users.
    menuMusic.volume = 0.45;

    // menuMusic.play()
    // starts the audio.
    //
    // The result is saved in playMusic because modern browsers
    // return a Promise here.
    const playMusic = menuMusic.play();

    // Some older browsers may not return anything from play().
    // This check prevents errors.
    if (playMusic !== undefined) {
      // catch() handles possible audio errors.
      //
      // For example, if a browser still blocks the music,
      // the website should not crash.
      playMusic.catch(() => {
        // If the browser still blocks audio, the homepage remains usable.
      });
    }
  });
});

// =====================================================
// Maps page search, sorting, and filtering
// =====================================================

// This is a second DOMContentLoaded block.
// It controls the maps page.
//
// It is separate from the homepage block because these are two different features:
// - homepage portal/music
// - maps search/filter/sort
document.addEventListener("DOMContentLoaded", () => {
  // This selects the container that contains all map articles.
  //
  // In maps.html this is:
  // <div id="map-list">
  const mapList = document.querySelector("#map-list");

  // This selects the search input field.
  //
  // Users type search words here.
  const searchInput = document.querySelector("#map-search");

  // This selects the sorting dropdown.
  //
  // Users choose how the maps should be ordered.
  const sortSelect = document.querySelector("#map-sort");

  // This selects the creep filter dropdown.
  //
  // Users choose a creep type like Trolls, Wargs, Dragons, etc.
  const creepFilter = document.querySelector("#creep-filter");

  // This selects the reset button.
  //
  // It clears search, sorting, and filtering back to the default state.
  const resetButton = document.querySelector("#reset-map-controls");

  // This selects the text that shows how many maps are currently visible.
  //
  // Example:
  // "2 of 3 maps shown"
  const resultCount = document.querySelector("#map-result-count");

  // Safety check.
  //
  // The same app.js file is also loaded on index.html.
  // But index.html does not have a map list, search input, or filters.
  //
  // If these elements do not exist, this maps feature stops immediately.
  if (!mapList || !searchInput || !sortSelect || !creepFilter || !resetButton) {
    return;
  }

  // mapList.querySelectorAll("article")
  // selects all article elements inside the map list.
  //
  // Each article is one map entry.
  //
  // querySelectorAll returns a NodeList.
  // Array.from(...) converts it into a real array,
  // because arrays are easier to sort and loop through.
  const mapArticles = Array.from(mapList.querySelectorAll("article"));

  // This function returns the map name from the article's data-name attribute.
  //
  // Example in HTML:
  // <article data-name="Rhun III">
  //
  // .toLowerCase() makes sorting/searching more consistent.
  function getMapName(article) {
    return article.dataset.name.toLowerCase();
  }

  // This function returns the player count from data-players.
  //
  // dataset values are always text.
  // Number(...) converts the text into a real number.
  //
  // Example:
  // "8" becomes 8
  function getPlayerCount(article) {
    return Number(article.dataset.players);
  }

  // This function returns the year from data-year.
  //
  // If the year is "unknown", Number("unknown") becomes NaN.
  // NaN means "Not a Number".
  //
  // In that case, we return null.
  // null means: there is no usable year.
  function getYear(article) {
    const year = Number(article.dataset.year);

    if (Number.isNaN(year)) {
      return null;
    }

    return year;
  }

  // This helper function compares two map names alphabetically.
  //
  // localeCompare is better than using < or >
  // because it is made for text comparison.
  function compareNames(firstArticle, secondArticle) {
    return getMapName(firstArticle).localeCompare(getMapName(secondArticle));
  }

  // This function sorts the map articles.
  //
  // Important:
  // Sorting does not create new HTML.
  // It rearranges the existing article elements.
  function sortMaps() {
    // This reads the currently selected sorting option.
    //
    // Example:
    // "players-asc"
    // "name-desc"
    // "year-asc"
    const sortValue = sortSelect.value;

    // [...mapArticles] creates a copy of the array.
    //
    // We sort the copy, not the original array.
    // This keeps the original list available.
    const sortedArticles = [...mapArticles].sort((firstArticle, secondArticle) => {
      // These variables collect the values needed for sorting.
      const firstName = getMapName(firstArticle);
      const secondName = getMapName(secondArticle);
      const firstPlayers = getPlayerCount(firstArticle);
      const secondPlayers = getPlayerCount(secondArticle);
      const firstYear = getYear(firstArticle);
      const secondYear = getYear(secondArticle);

      // Sort by players from low to high.
      //
      // Example:
      // 4 players before 6 players before 8 players.
      //
      // If both maps have the same player count,
      // || compareNames(...) sorts them alphabetically as a second rule.
      if (sortValue === "players-asc") {
        return firstPlayers - secondPlayers || compareNames(firstArticle, secondArticle);
      }

      // Sort by players from high to low.
      //
      // Example:
      // 8 players before 6 players before 4 players.
      //
      // Same player count again falls back to alphabetical order.
      if (sortValue === "players-desc") {
        return secondPlayers - firstPlayers || compareNames(firstArticle, secondArticle);
      }

      // Sort by name from A to Z.
      if (sortValue === "name-asc") {
        return firstName.localeCompare(secondName);
      }

      // Sort by name from Z to A.
      if (sortValue === "name-desc") {
        return secondName.localeCompare(firstName);
      }

      // Sort by year from old to new.
      if (sortValue === "year-asc") {
        // If both years are unknown,
        // sort alphabetically instead.
        if (firstYear === null && secondYear === null) {
          return compareNames(firstArticle, secondArticle);
        }

        // If only the first year is unknown,
        // place the first map after the second map.
        if (firstYear === null) {
          return 1;
        }

        // If only the second year is unknown,
        // place the second map after the first map.
        if (secondYear === null) {
          return -1;
        }

        // Both years are known:
        // smaller year first.
        //
        // If years are equal,
        // sort alphabetically as a second rule.
        return firstYear - secondYear || compareNames(firstArticle, secondArticle);
      }

      // Sort by year from new to old.
      if (sortValue === "year-desc") {
        // If both years are unknown,
        // sort alphabetically instead.
        if (firstYear === null && secondYear === null) {
          return compareNames(firstArticle, secondArticle);
        }

        // Unknown years should still appear at the end.
        if (firstYear === null) {
          return 1;
        }

        if (secondYear === null) {
          return -1;
        }

        // Both years are known:
        // larger year first.
        //
        // If years are equal,
        // sort alphabetically as a second rule.
        return secondYear - firstYear || compareNames(firstArticle, secondArticle);
      }

      // Fallback.
      // If no sorting option matches, keep the current order.
      return 0;
    });

    // appendChild moves existing elements inside the DOM.
    //
    // This means:
    // We do not duplicate the articles.
    // We move them into the new sorted order.
    sortedArticles.forEach((article) => {
      mapList.appendChild(article);
    });
  }

  // This function handles both:
  // - fulltext search
  // - creep filtering
  function filterMaps() {
    // Read the search text.
    //
    // trim() removes spaces at the beginning and end.
    // toLowerCase() makes the search case-insensitive.
    //
    // Example:
    // "TROLL" and "troll" behave the same.
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Read the selected creep filter.
    //
    // Example:
    // "all"
    // "trolls"
    // "dragons"
    const selectedCreep = creepFilter.value.toLowerCase();

    // This counter counts how many maps remain visible.
    let visibleMaps = 0;

    // Loop through every map article.
    mapArticles.forEach((article) => {
      // article.textContent contains all visible text inside the article.
      //
      // This is what makes the search a fulltext search.
      // It searches not only the name, but also creator, year, creeps,
      // description, size, buildings, etc.
      const articleText = article.textContent.toLowerCase();

      // article.dataset.creeps reads the data-creeps attribute.
      //
      // This is used for the creep filter.
      const articleCreeps = article.dataset.creeps.toLowerCase();

      // Search condition:
      //
      // If the article text contains the search term,
      // the map matches the search.
      //
      // If the search field is empty,
      // includes("") is true for every article.
      const matchesSearch = articleText.includes(searchTerm);

      // Creep filter condition:
      //
      // If "all" is selected, every map matches.
      // Otherwise, the map must contain the selected creep.
      const matchesCreep = selectedCreep === "all" || articleCreeps.includes(selectedCreep);

      // A map is only shown if it matches BOTH:
      // - the search
      // - the creep filter
      if (matchesSearch && matchesCreep) {
        // hidden = false means the article is visible.
        article.hidden = false;

        // Increase the visible map counter.
        visibleMaps += 1;
      } else {
        // hidden = true hides the article.
        article.hidden = true;
      }
    });

    // If the result counter exists,
    // update its text.
    if (resultCount) {
      resultCount.textContent = `${visibleMaps} of ${mapArticles.length} maps shown`;
    }
  }

  // This function combines sorting and filtering.
  //
  // Whenever the user changes something,
  // we first sort the maps and then filter them.
  function updateMapList() {
    sortMaps();
    filterMaps();
  }

  // When the user types into the search field,
  // update the map list immediately.
  //
  // "input" reacts while typing.
  searchInput.addEventListener("input", updateMapList);

  // When the user changes the sort dropdown,
  // update the map list.
  sortSelect.addEventListener("change", updateMapList);

  // When the user changes the creep filter,
  // update the map list.
  creepFilter.addEventListener("change", updateMapList);

  // When the reset button is clicked,
  // reset all controls to their default values.
  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    sortSelect.value = "players-asc";
    creepFilter.value = "all";

    // After resetting the controls,
    // update the visible list.
    updateMapList();
  });

  // This runs once when the page loads.
  //
  // It makes sure the map list is sorted correctly from the beginning
  // and the result counter is already correct.
  updateMapList();
});
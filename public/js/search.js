const list = document.getElementById("search__list");
const searchBar = document.getElementById("search-bar");

document.addEventListener("DOMContentLoaded", function () {
    list.style.display = "none";
});

const showSearchResultsInfo = (input) => {
    let numberOfSearchResults = document.querySelectorAll(".visible").length;
    let searchResultsText = `<p class="search-info--text">There are <b>${numberOfSearchResults}</b> search results for "<b>${input}</b>"</p>`;
    const searchResultsInfo = document.getElementById("search-info");
    if (input === "") {
        searchResultsInfo.innerHTML = "";
    } else {
        searchResultsInfo.innerHTML = "";
        searchResultsInfo.innerHTML = searchResultsText;
    }
};

const searchLinks = () => {
    let input = document.getElementById("search_bar").value.toLowerCase();
    let match = document.getElementsByClassName("search__result");

    for (i = 0; i < match.length; i++) {
        let matches = `${match[i].getAttribute("data-search").split(",").join(" ")} ${match[i]
            .getAttribute("data-name")
            .toLowerCase()}`;
        match[i].setAttribute("data-search", matches);

        if (input === "") list.style.display = "none";
        if (match[i].getAttribute("data-search").toLowerCase().includes(input) && input !== "") {
            list.style.display = "block";
            match[i].style.display = "flex";
            match[i].classList.add("visible");
        } else {
            match[i].style.display = "none";
            match[i].classList.remove("visible");
        }
    }

    showSearchResultsInfo(input);
};

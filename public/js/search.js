const list = document.getElementById("search__list");
const link = document.getElementsByClassName("match-link");

document.addEventListener("DOMContentLoaded", function () {
    list.style.display = "none";
});

const searchLinks = () => {
    let input = document.getElementById("search_bar").value.toLowerCase();
    let match = document.getElementsByClassName("search__result");

    for (i = 0; i < match.length; i++) {
        let matches = `${match[i].getAttribute("data-category").split(",").join(" ")} ${match[i]
            .getAttribute("data-name")
            .toLowerCase()}`;
        match[i].setAttribute("data-search", matches);
        if (input === "") list.style.display = "none";
        if (match[i].getAttribute("data-search").toLowerCase().includes(input) && input !== "") {
            list.style.display = "block";
            match[i].style.display = "flex";
        } else {
            match[i].style.display = "none";
        }
    }
};

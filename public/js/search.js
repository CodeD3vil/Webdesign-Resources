const list = document.getElementById("search__list");

document.addEventListener("DOMContentLoaded", function () {
    list.style.display = "none";
});

const searchLinks = () => {
    let input = document.getElementById("search_bar").value.toLowerCase();
    let match = document.getElementsByClassName("match");

    for (i = 0; i < match.length; i++) {
        if (input === "") list.style.display = "none";
        if (
            (match[i].innerHTML.toLowerCase().includes(input) && input !== "") ||
            (match[i].getAttribute("data-category").toLowerCase().includes(input) && input !== "")
        ) {
            list.style.display = "block";
            match[i].style.display = "list-item";
        } else {
            match[i].style.display = "none";
        }
    }
};
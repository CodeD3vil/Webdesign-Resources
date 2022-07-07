const searchLinks = () => {
    let input = document.getElementById("search_bar").value.toLowerCase();
    let match = document.getElementsByClassName("match");

    for (i = 0; i < match.length; i++) {
        match[i].innerHTML.toLowerCase().includes(input)
            ? (match[i].style.display = "list-item")
            : (match[i].style.display = "none");
    }
};

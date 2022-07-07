const mobileButtonToggle = document.querySelector(".mobile-toggle");
const mobileNavigationElement = document.querySelector(".navigation");
const sections = document.querySelectorAll(".section");
const navigationLinks = document.querySelectorAll(".header__nav--link");
const waves = document.querySelectorAll(".wave");

//mobile mavigation toggle when hamburger menu is clicked
mobileButtonToggle.addEventListener("click", () => {
    const visibility = mobileNavigationElement.getAttribute("data-visible");
    visibility === "false"
        ? mobileNavigationElement.setAttribute("data-visible", true)
        : mobileNavigationElement.setAttribute("data-visible", false);
});

mobileNavigationElement.addEventListener("click", () => {
    const visibility = mobileNavigationElement.getAttribute("data-visible");
    visibility === "false"
        ? mobileNavigationElement.setAttribute("data-visible", true)
        : mobileNavigationElement.setAttribute("data-visible", false);
});

//slide mobile navigation away
const mobileNavigationOff = function () {
    const visibility = mobileNavigationElement.getAttribute("data-visible");
    visibility === "true" ? mobileNavigationElement.setAttribute("data-visible", false) : null;
};

//slide mobile navigation away when clicked on webpage section(outside the navigation, not including the header)
//slide mobile navigation away after clicking on nvigation links
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", mobileNavigationOff);
    for (let i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].addEventListener("click", mobileNavigationOff);
        for (let i = 0; i < waves.length; i++) {
            waves[i].addEventListener("click", mobileNavigationOff);
        }
    }
}

const header = document.getElementById("header-primary");

window.onscroll = function () {
    fixedOnScroll();
};

const headerHeight = header.offsetHeight;
console.log(headerHeight);

function fixedOnScroll() {
    window.pageYOffset > headerHeight ? header.classList.add("header-fixed") : header.classList.remove("header-fixed");
}

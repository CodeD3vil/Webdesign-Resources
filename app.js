const express = require("express");
const path = require("path");
let urlLinks = require("./urlLinks.json");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//root directory
app.use(express.static(`${__dirname}`));
//public files directory
app.use(express.static(`${__dirname}/public`));

app.get("/", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/index.ejs")}`, { urlLinks, title: "home" });
});

//route to the HOME page
app.get("/home", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/index.ejs")}`, { urlLinks, title: "home" });
});

//route to the RESOURCES page
app.get("/resources", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/resources.ejs")}`, { urlLinks, title: "resources" });
});

//route to the SUPPORT page
app.get("/inspiration", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/inspiration")}`, { urlLinks, title: "inspiration" });
});

app.get("/tools", (request, response) => {
    response.render(`${path.join(__dirname, "./views/pages/tools")}`, { urlLinks, title: "tools" });
});

app.get("/search", (request, response) => {
    urlLinks = urlLinks.slice().sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    response.render(`${path.join(__dirname, "./views/pages/search")}`, { urlLinks, title: "search" });
});

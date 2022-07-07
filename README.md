# ISC Intranet

This a fully responsive International School of Curitiba intranet website. Its main purpose is to have a central hub for the employees (and later maybe parents or even students). It contains links to school's forms, policies, contacts and more. It is scured by Google auth0 technology and users are required to have a Google account in iscbrazil.com domain.

The development started at the beginning of <b>March 22</b>nd.

## Technologies & Dependencies

The website is built with these technologies and dependencies.

### Software used

* <b>Required</b>
  * [VS Code editor](https://code.visualstudio.com/) - all coding was done with this software
  * [Node JS](https://nodejs.org/en/) - runs the server side of the website.
  * [Git](https://git-scm.com/) - Essential part of any project, code version control system

* <b>Optional</b>
  * [Postman](https://www.postman.com/) - for testing APIs and routes
  * [Figma](https://www.figma.com/) - UI & UX design tool
  * [MongoDB Compass](https://www.mongodb.com/products/compass) - MongoDB GUI database management

#### VS Code extensions

* <b>Required</b>
  * [Node.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack) contains all neccessary npm extensions
  * [dotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - Support for dotenv file syntax

* <b>Optional</b>
  * [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
  * [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
  * [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
  * [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) - I used an npm package instead
  * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  * [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  * [Resource Monitor](https://marketplace.visualstudio.com/items?itemName=mutantdino.resourcemonitor)

### Frontend Languages & Frameworks

* HTML - eventually "replaced" by EJS
* CSS
* JavaScript
* [EJS](https://ejs.co/)

#### Backend Dependencies (npm)

* <b>Required</b>
  * [ExpressJS](https://expressjs.com/)
  * [Express-session](https://www.npmjs.com/package/express-session)
  * [Memorystore](https://www.npmjs.com/package/memorystore)
  * [Passport](http://www.passportjs.org/)
  * [Passport-google-oauth2](https://www.npmjs.com/package/passport-google-oauth2)
  * [dotENV](https://www.npmjs.com/package/dotenv)
  * [Memorystore](https://www.npmjs.com/package/memorystore)
  * [MongoDB](https://www.npmjs.com/package/mongodb)
  * [EJS](https://www.npmjs.com/package/ejs)
  * [SASS](https://www.npmjs.com/package/sass) - can be replaced by "Live Sass Compiler" VS code extension, - dev dependency
  
* <b>Optional</b>
  * [Npm-run-all](https://www.npmjs.com/package/npm-run-all)
  * [Morgan](https://www.npmjs.com/package/morgan)
  * [Winston](https://www.npmjs.com/package/winston)
 

To install all dependencies just execute this command in VS code console with package.json file present in the root folder
```
npm i
```

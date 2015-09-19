#Phone-A-Friend
-----------
A project scaffold generator based on Node, Express, Browserify and React, thoroughly inspired by [Ezel](http://ezeljs.com/) which is used at [Artsy](http://artsy.net/) to boostrap new projects.

##Problem
Server side and client side frameworks have distinct advantages and it's not clear at the outset of a project which strategy makes the most sense to pursue. In addition, forcing a monolithic structure (server vs client side rendering) on project doesn't always make sense.

__A few of the advantages for server vs. clientside rendering__

- Client side advantages
  - Allow for rich, fluid interactions with the user 
  - No page refreshes or browser redirects mean a more fluid UX.
  - JavaScript is fun
- Server side advantages
  - Simpler/more intuitive to develop
  - JS not necessary (you can do a lot with CSS
  - Quicker initial page load 
  - Indexiable by search engines (if the webcrawler does not have JS enabled, there is no content to index in a client side app)
  - You can use any language on the server

Given that it could make sense to pursue either strategy in different parts of a project, it would be great to re-use Views and any associated logic whether rendering on the server or in the browser.

##Solution
###Technology
- **Full stack JS** (excluding the persistence layer) lets you reuse code on the server and browser
- Use **Browserify** to bundle JS files.
  - Browserify follows `require` statements to gather all the dependencies of an app and generates a bundle to be sent to the browser.
  - While it is traversing your files, Browserify can also perform helpful transformations like minifying/uglifying your files or converting them from Coffeescript to plain JavaScript.
- **React** makes programming views very easy. JSX looks familiar and friendly to frontend devs.
- **Reactify** and **Node-Jsx** to translate JSX to plain JS in the client and server respectively.
- **Inline styling** with **Radium** to bypass the CSS portion of the asset pipeline.
  - Keeps your styling close (literally in the same file) to the React components that you're building.
  - All styling is locally scoped instead of typical global CSS scope.
  - No need for BEM or other naming conventions.
  - **Downsides** include fewer selectors to use and more difficult to make site-wide styling changes.
- **Gulp** to build production assets

###Framework



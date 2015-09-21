#Bezel
-----------
A project scaffold generator based on Node, Express, Browserify and React, thoroughly inspired by [Ezel](http://ezeljs.com/) which is used at [Artsy](http://artsy.net/) to boostrap new projects.

##Problem
Server side and client side frameworks have distinct advantages and it's not clear at the outset of a project which strategy makes the most sense to pursue. In addition, forcing a monolithic structure (server vs client side rendering, or Rails for that matter) on project doesn't always make sense.

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
  - **Downsides** includes fewer selectors to use and more difficult to make site-wide styling changes. And you still need global CSS for layout. 
  - That said, most styling, especially any style changes due to user interaction are defined on the component itself (e.g. crossing out a list item is better considered a state change handled with JS, not a style change handled with CSS and adding/removing class names).
- **Gulp** to build production assets

###Framework
A project is considered to be the entire website and is composed of: 

- **apps** which are more focused in purpose. Apps might be rendered on the server, in the browser or some combination of the two.
  - Each app is self contained and should not require pieces of other apps
- **components** which are React components. Some components are specific to certain apps, others which might be reused across a project can be placed in the top level `/components` directory.
- **api** (optional) you can use whichever backend you like--just point your React components at the proper URL
- **no models or collections** React components handle their own validations and through events/actions communicate directly with the API.

### Citations
I drew heavily from [Ezel](http://ezeljs.com/) when making the framework for this project. Ezel scaffolds projects based on Node, Express, Browserify, Stylus and Backbone. My goal was to modify Ezel to scaffold a project based on Node, Express, Browserify and React and inline styles. I also subbed out the Makefile in favor of Gulp in order to build production ready bundles of JS and CSS.

The overall directory structure is based on Ezel and there are a few lines of code which are almost directly borrowed including the invaluable snippet from `server.js` below which transpiles JSX to JS on the fly in development mode instead of having to use Gulp to make a new bundle with every change:

```
// if in the development environment, transpile assets on request in development
// run gulp in production 
if ('development' == process.env.NODE_ENV) {
    
    app.use(require('browserify-dev-middleware')({
    src: path.resolve(__dirname),
    transforms: [require('reactify')]
    }));
}
```
###Links
[Ezel](http://ezeljs.com/) - isomorphic JS w/Backbone

[Isomorphic Javascript w/React](https://reactjsnews.com/isomorphic-javascript-with-react-node/) - isomorphic JS w/React demonstration

[`Inline styles == bliss`](https://www.youtube.com/watch?v=ERB1TJBn32c) - watch here for a convincing presentation on why inline styling works great with React. So much of styling is to reflect appliaction state, not just for static presentation. Keep state indicators close to your component logic and leave static presentation to CSS.

[Radium](http://projects.formidablelabs.com/radium/) - React inline styling helper. Gives you back media queries, `:hover`, `:focus`, and `:active` classes, and _automatic vendor prefixes_!

[CSS Modulesify](https://github.com/css-modules/css-modulesify) - A great alternative for managing CSS scoping issues if you still like classes. CSS Modulesify is an implementation of the CSS Modules concept elaborated on in [this blog post](https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284).










# Express.js API REST

A Express API REST with authentication and athorization using Babel and ES2017+ features in a Node.js server environment as well as providing linting and testing solutions. 

### Features:
- [Express.js](https://expressjs.com/) as the web framework.
- ES2017+ support with [Babel](https://babeljs.io/).
- Automatic polyfill requires based on environment with [babel-preset-env](https://github.com/babel/babel-preset-env).
- Linting with [ESLint](http://eslint.org/).
- Testing with [Jest](https://facebook.github.io/jest/).

## Getting started

```sh
# Clone the project
git clone https://github.com/fedeiglesiasc/apirest.git
cd express-babel

# Install dependencies
npm install

```

Then you can begin development:

```sh
# npm
npm run dev
```

This will launch a [nodemon](https://nodemon.io/) process for automatic server restarts when your code changes.

### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/). This project also uses [supertest](https://github.com/visionmedia/supertest) for demonstrating a simple routing smoke test suite.

Start the test runner in watch mode with:

```sh
# npm
npm test
```
### Deployment

Deployment is specific to hosting platform/provider but generally:

```sh
# npm
npm run build
```

will compile your `src` into `/dist`, and 

```sh
# npm
npm start
```

will run the compiled application from the `/dist` folder.

*All the configuration for ESLint, Jest and Babel is in `package.json`.*

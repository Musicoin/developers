# developers.musicoin.org

Current Status: MVP4 -1 endpoints complete

## Getting started

The project needs nodemon to be installed
`npm install nodemon -g`
`npm install --save-dev nodemon`

As with any node directory, this also requires npm packages to be installed
`npm install`

To build a compressed html version of the site, run
`npm run build`

To serve the site locally, run
`npm start`

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will automatically reload if you make edits
You will also see lint errors (if any) in the console.

## Other commands for development and deployment

### `npm run watch`

Builds the app for production to the `public` folder.<br>
It correctly bundles React in develpment mode. It's slower and only for development.
You can make changes without having to run the script again.

### `npm run production`

Builds the app for production to the `public` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

You can make changes without having to run the script again. Ideal for development

## Other Repositories Needed

[api-dev-musicoin](https://github.com/Varunram/api-dev-musicoin) - backend necessary for the login, signup and forgot password routes to work

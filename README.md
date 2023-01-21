# Getting Started with Create ScandiPWA App

This package contains new ScandiPWA theme sources. Your parent theme is `@scandipwa/scandipwa`.

## Installation

Before you start, make sure to install package dependencies.

To do this, use `yarn` or `npm i` command.

### Recommended packages

For the best expirience, install `scandipwa-cli` package globally. To do this, run:

```bash
npm i -g scandipwa-cli
```

## Available Scripts

### `npm run start` or `yarn start`

Starts the development server.

**Features**:
- The page will reload if you make edits.
- You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Bundles the app into static files for production.

> **Note**: To bundle your application as valid Magento 2 theme use `--magento` option.

**Features**:
- The build is minified and the filenames include the hashes.
- The build is optimized for the best performance

## Extensions

To install an extension, run following command:

```bash
scandipwa extension <EXTENSION NAME>
```

> **Note**: to create new extension add `--create` option after the command. This will create a new extension package under `packages` folder.


##Introduction of a storybook into a project, an example:

npm i scandipwa-storybook-plugin
npm i scandipwa-cli
npx sb init
npm run storybook

Create ./postcss.config.js :
module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        autoprefixer: {
            flexbox: 'no-2009'
        }
    }
};
and install those plugins (postcss-flexbugs-fixes, autoprefixer).

npm i @storybook/builder-webpack5

Added in .storybook/main.js :
module.exports = {
  core: {
    builder: 'webpack5',
  },
};

webpack -v 
and install webpack cli, if it needed

npx sb@next upgrade --prerelease
npm i -D @storybook/manager-webpack5@next
npx sb@next init --builder webpack5

start-storybook -p 6006 -s public


## Prerequisites
Because you might be developing on one of several different platforms, targeting several different types of devices, basic setup can be involved. You should first ensure that you can run a plain React Native app without TypeScript. Follow the instructions on the React Native website to get started. When you've managed to deploy to a device or emulator, you'll be ready to start a TypeScript React Native app.

You will also need Node.js, NPM, and Yarn.

<br/>

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/flexdinesh/react-redux-boilerplate">
    <img src="https://david-dm.org/pankod/next-boilerplate.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/pankod/next-boilerplate#info=devDependencies"> 
    <img src="https://david-dm.org/pankod/next-boilerplate/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/pankod/next-boilerplate">
    <img src="https://travis-ci.org/pankod/next-boilerplate.svg?branch=master" alt="Build Status" />
  </a>
</div>


<br/>
<div align="center">
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>



## About

This is the minimal possible setup to get a in memory version of React Native working with TypeScript support. The current techniques use a multi-step process, you save -> TypeScript creates JS file -> Babel sees JS file and compiles to ES5. This replaces that with a custom transformer that will either pass the file to Babel or the TypeScript compiler.

<br/>

## Features


This boilerplate includes the latest powerfull tools.

* **React Navigation** - Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.
* **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces. path support(allias)
* **Redux** - State management
* **Redux Persist** - Persist and rehydrate a redux store.
* **Styled Components** - Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!
* **Babel** -  The compiler for next generation JavaScript. Module(alias) support 
* **TSLint** - Contains TypeScript-specific options for our project.
* **CodePush** - CodePush is a cloud service that enables Cordova and React Native developers to deploy mobile app updates directly to their users' devices.
* **React Native SVG** - React Native SVG provides SVG support to React Native on iOS and Android.
* **Splash Screen** - A splash screen API for react-native which can programatically hide and show the splash screen. Works on iOS and Android.
* **I18n** - Integrates I18n with React Native. Uses the user preferred locale as default. 
* **Jest and Enzyme support** - Complete and ready to set-up JavaScript testing solution. Works out of the box for any React project.


<br/>

*Here are a few highlights to look out for in this boilerplate*

<dl>
  
  <dd>The boilerplate includes tsconfig.json which contains a list of your input files as well as all your compilation settings.<dd>

  >One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

 
  <dd>Includes babel-plugin-module-resolver <dd>

  >A Babel plugin to add a new resolver for your modules when compiling your code using Babel. This plugin allows you to add new "root" directories that contain your modules. It also allows you to setup a custom alias for directories, specific files, or even other npm modules.

  
  <dd>Includes next-runtime-dotenv <dd>

  >Normally, .env isn’t available in the browsers (only Node.js), but our boilerplate uses npm package for make it available.

</dl>

<br/>

## Getting Started


1. Clone the repository and install the dependencies:

```sh
git clone https://github.com/pankod/react-native-boilerplate
```


2. To create a new app, go to the choosen app directory on the CLI then run one of the following methods:

**npm**

```sh
npm install
```
**yarn**

```sh
yarn install
```

3. Once the installation is done, you can run the following command:

 ```
 npm run android or ios
 ```
 <br/>

4. Cache clear and restart react native bundler

 ```
 npm run clear
 ```
 <br/>

 ***At this point, your project layout should look like this:***
 
 <br/>

```
├── LICENSE
├── README.md
├── __tests__
│   ├── App.js
│   └── App.tsx
├── android
│   ├── ReactNativeBoilerplate.iml
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   ├── local.properties
│   └── settings.gradle
├── app.json
├── index.js
├── ios
│   ├── Podfile
│   ├── Podfile.lock
│   ├── Pods
│   ├── ReactNativeBoilerplate
│   ├── ReactNativeBoilerplate-tvOS
│   ├── ReactNativeBoilerplate-tvOSTests
│   ├── ReactNativeBoilerplate.xcodeproj
│   ├── ReactNativeBoilerplate.xcworkspace
│   ├── ReactNativeBoilerplateTests
│   └── build
├── jest.json
├── package.json
├── rn-cli.config.js
├── src
│   ├── App
│   └── Assets
├── tests
│   └── setup.js
├── tsconfig.jest.json
├── tsconfig.json
└── tslint.json

```

## License

Licensed under the MIT License, Copyright © 2018-present Pankod

<div align="center" id="top"> 
</div>

<h1 align="center">phone-catelog-react-native-using-redux</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/awaisdelta/phone-catelog-react-native-using-redux?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/awaisdelta/phone-catelog-react-native-using-redux?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/awaisdelta/phone-catelog-react-native-using-redux?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/awaisdelta/phone-catelog-react-native-using-redux?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/awaisdelta/phone-catelog-react-native-using-redux?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/awaisdelta/phone-catelog-react-native-using-redux?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Catelogapp 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/awaisdelta" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This project is written to fetch products list from server and display. User can view product details by taping the any list-item. We are using redux for state management.

## :sparkles: Features ##

:heavy_check_mark: Fetch data from server and display list of `products`;\
:heavy_check_mark: All items in list are clickable;\
:heavy_check_mark: Show details when user tab on any list-item;
:heavy_check_mark: Using `redux` for state-management;
:heavy_check_mark: Using `detox` for E2E testing;

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

You need to setup enviornment for `react-native` not already done. 
You can find instructions on <a href="https://reactnative.dev/docs/environment-setup" target="_blank">https://reactnative.dev/docs/environment-setup</a>

## Setup Server ##
```bash
# Clone server project
$ git clone https://github.com/awaisdelta/phone-catelog-server

# Access
$ cd phone-catelog-server

# Install dependencies
$ npm install

# Run the project
$ npm start

# The server will initialize in the <http://localhost:3000>

#Note: You need to update `SERVER_URL` inside `src/common/config.js` to fetch data from local-server

```


## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/awaisdelta/phone-catelog-react-native-using-redux

# Access
$ cd phone-catelog-react-native-using-redux

# Install dependencies
$ npm install

# Run the project
$ npm start

# Launch app on android
$ nxp react-native run-android
```

## Testing
For testing I am using detox following this link. https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md
# Run following command for E2E testing
`detox test --configuration android`

## APK file 
https://drive.google.com/file/d/1vPTgsr2vC5_CUUPVYs4uBSuR2I-Vb4QC/view?usp=sharing

Made with :heart: by <a href="https://github.com/AwaisRai" target="_blank">AwaisRai</a>

&#xa0;

<a href="#top">Back to top</a>

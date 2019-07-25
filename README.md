:boom: :iphone: react-native-workshop :iphone: :boom:
===
A hands-on workshop on building Native iOS and Android applications with state of the art React Native.

Slide Link: [Link](https://docs.google.com/presentation/d/1oEJ5zC-RQHYYcea5tgEOADKNtW-aeFtMjuiaG2VXEeE/edit?usp=sharing)

## Table of Contents
* Setting Up Environment
* What is React?
* Theory of React, Vitual DOM, JSX, Components, Lifecycle Methods, State & Props
* Difference between ReactJS and React Native
* Why should you learn React Native?
* Who is using React Native?
* Hello World iOS and Android application using React Native?
* Adding ESLint to the project
* Plugging Pre-hook commit ESLint
* Plugging React Navigation
* Configuring Stack, Tab and Drawer Navigation
* Configuring Redux library
* Addng Redux Thunk for async operations
* Adding JSS - JavaScript StyleSheet
* Introducing Flexbox for mobile layouts
* Making application responsive for all screen sizes
* Testing application code (Unit testing)

### Environment Setup
> Ideally you should have a Mac machine to be able to develop iOS and Android applications, however though if you happen to have a Linux or Windows machine you could develop an Android application only.
#### For iOS - MAC
* Install Brew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* Install Node `brew install node`
* Install Watchman `brew install watchman`
>> If you have already installed [Node](https://nodejs.org/) on your system, make sure it is Node 8.3 or newer.
>> [Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.
* Install React Native Cli `npm install -g react-native-cli`
* Install XCode 
* Setup a new React Native project `react-native init myReactNativeProject`

#### For Android - MAC
* Install Brew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* Install Node `brew install node`
* Install Watchman `brew install watchman`
>> If you have already installed [Node](https://nodejs.org/) on your system, make sure it is Node 8.3 or newer.
>> [Watchman](https://facebook.github.io/watchman) is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.
* Install React Native Cli `npm install -g react-native-cli`
* Install Android Studio
* Setup a new React Native project `react-native init myReactNativeProject`

#### For Android - Windows
* Install Chocolatey `@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`
* Install Node Python2 & JDK8 `choco install -y nodejs.install python2 jdk8`
>> If you have already installed [Node](https://nodejs.org/) on your system, make sure it is Node 8.3 or newer. If you already have a JDK on your system, make sure it is version 8 or newer.
* Install React Native Cli `npm install -g react-native-cli`
* Install Android Studio
* Setup a new React Native project `react-native init myReactNativeProject`

>> For more details how to get started with the environment setup, checkout offical [React Native](https://facebook.github.io/react-native/docs/getting-started) docs

## React Native Boilerplates or StarterKits
Checkout React Native Boilerplates or StarterKits for your next project, and should you like this open source project, remember to ####star####, ####fork#### and ####share#### the repo with others in this domain. Any suggestions to add more boilerplates would be highly appreciated.

<img width="100%" src="https://camo.githubusercontent.com/b3338a9d26ce4dbe5b5e4025c27f4761adafa058/68747470733a2f2f692e6962622e636f2f6e6e32583177522f524e426f696c6572706c617465732e6a7067" alt="react native boilerplates" />

## List of React Native boilerplates
* [RN-01 RN-REDUX-REACTNAVIGATION](https://github.com/react-pakistan/react-native-boilerplate/tree/RN01) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN01)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-02 RN-REDUX-THUNK-REACTNAVIGATION](https://github.com/react-pakistan/react-native-boilerplate/tree/RN02) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN02)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-03 RN-REDUX-SAGA-REACTNAVIGATION](https://github.com/Taimoormk/react-native-boilerplate/tree/RN03) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN03)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-04 RN-REDUX-THUNK-RESELECT-REACTNAVIGATION](https://github.com/Taimoormk/react-native-boilerplate/tree/RN04) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN04)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-05 RN-REDUX-SAGA-RESELECT-REACTNAVIGATION](https://github.com/Taimoormk/react-native-boilerplate/tree/RN05) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN05)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-06 RN-REDUX-REACTNAVIGATION-STYLEDCOMPONENTS](https://github.com/Taimoormk/react-native-boilerplate/tree/RN06) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN06)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-07 RN-REDUX-THUNK-REACTNAVIGATION-STYLEDCOMPONENTS](https://github.com/Taimoormk/react-native-boilerplate/tree/RN07) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN07)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-08 RN-REDUX-SAGA-REACTNAVIGATION-STYLEDCOMPONENTS](https://github.com/Taimoormk/react-native-boilerplate/tree/RN08) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN08)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-09 RN-REDUX-THUNK-RESELECT-REACTNAVIGATION-STYLEDCOMPONENTS](https://github.com/Taimoormk/react-native-boilerplate/tree/RN09) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN09)](https://app.bitrise.io/app/6ffe266405736e5a)
* [RN-10 RN-REDUX-SAGA-RESELECT-REACTNAVIGATION-STYLEDCOMPONENTS](https://github.com/Taimoormk/react-native-boilerplate/tree/RN10) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b40bb064f95f4077ba0fbf7fcb91ab55)](https://www.codacy.com/app/Taimoormk/react-native-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=react-pakistan/react-native-boilerplate&amp;utm_campaign=Badge_Grade) [![Build Status](https://app.bitrise.io/app/6ffe266405736e5a/status.svg?token=_giyzRcYfh65hOw2Pv01Ug&branch=RN10)](https://app.bitrise.io/app/6ffe266405736e5a)
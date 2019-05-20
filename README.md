:boom: :iphone: react-native-workshop :iphone: :boom:
===
A hands-on workshop on building Native iOS and Android applications with state of the art React Native.

Slides Link: [Link](https://google.com)

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
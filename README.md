## GotSport React Native
This is a react native project for GotSport. This is a very basic app using webview to pull in the mobile web version of the GotSport platform.


### Before you Start
Install Yarn or NPM package manager.

### Getting Started
Install expo cli by running `npm install -g expo-cli`  or `yarn global add expo-cli`. It may prompt you to install Xcode if you don't already have it installed. From the project root, run `npm install` or `yarn install` to install all project dependencies from the `package.json` file.

After installing dependencies you should be able to run `expo start` to run the app locally. Once the server is running, you should see a number of options for viewing the app (web, ios simulator, or mobile device) I recommend using the simulator or mobile device. To use your own mobile device to see the application, you can install the Expo app on your phone, and then scan the qr code in your terminal to view your app.

### Environment Variables
We are using dotenv so add a `.env` file to the root of the project and then add `LOCALHOST_IP=http://127.0.0.1:3000/` to it. Make sure to restart server afterwards.

## Links and References
- Env Setup - https://reactnative.dev/docs/environment-setup
- Webview docs - https://github.com/react-native-webview/react-native-webview
- React Native - https://reactnative.dev/docs/getting-started

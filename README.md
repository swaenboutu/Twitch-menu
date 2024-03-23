# Project description

This project is made to be able to display a picture of the menu for my cooking stream on twitch (https://twitch.tv/swaenlive).
This project is openSource and free to use, if you're doing so please notify me so I can brag :D

# ProjectHow to make it works

## viewer side

On the viewer side, the only thing to do to display the menu is to use the message "**!menu**" in the Chat.

## streamer side

On the streamer side, you should include a **compiled version** of this project as a "*Brower source*" in your streaming software (such as OBS or streamElements).

But befor you do so, here are the few things you have to set :
* The `channels` in `varibles.js` file must contains the name of the Twitch channels you want to use this project on
* The `local` in `variables.js` file must contains the correct local to correctly display the date according to your country (for now, it's only working for fr and en)
 
The project is using **Github Gists** file  (https://gist.github.com/) to store the menus that will be displayed in the webpage. In order to make it work you should set :

* The `UUID` of you're own Gists in `githubGistsinfos` in `the variables.js` file
* The `filename` of the file you've created on your Gists in the `variables.js` file
Here is how should the content of the file looks like :
```
[
    {"date": "2024-02-05","menu": "My awsome menu"},
    {"date": "2024-03-23","menu": "Today's menu"}
]
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

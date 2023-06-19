# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



# Lang_Sync

langsync is a **npm package** which converts any file (.pdf , .docx , .doc , .jpeg /.png /.jpg ,.txt) text into many other languages. This project is basically made with **Javascript / Typescript**. 

For making it, I use Google translator (to translate text into many more languages) , OCR text extractor (to extract text from image and pdf) and Converter12 Rapid api (to extract word from word files).

Demo(React Js): https://langsync-react-test.netlify.app/

Demo(Angular Js): https://langsync-angular-test.netlify.app/



## For React JS and Angular JS

React Js-Demo-Repository Link : https://github.com/abhitabh-kumar/langsync_React_test

Angular Js-Demo-Repository Link : https://github.com/abhitabh-kumar/langsync_Angular_test

Step1: install “langsync” npm package.

	npm install langsync

Step 2: import “Extract” class in your file react js file.

	import {Extract} from ‘langsync’
    
Step3: pass “file” and “outputlanguage” **(code of your language in which you want to convert)** as argument in
“Extract.fileTranslate(outputlanguage,file)” method  and then handle the promise.

	Extract.fileTranslate(outputLanguage, file.files[0]).then((data)=>{
 		console.log(data.result); 
         // data is in json format which contains result
    });
	// data.result is converted text in your desire language

Important : For all languages specified their specific code. 

    const languages = [
        {
            no: "1",
            name: "Afrikaans",
            native: "Afrikaans",
            code: "af",
        },
        {
            no: "2",
            name: "Albanian",
            native: "Shqip",
            code: "sq",
        },
        {
            no: "3",
            name: "Arabic",
            native: "عربي",
            code: "ar",
        },
        {
            no: "4",
            name: "Armenian",
            native: "Հայերէն",
            code: "hy",
        },
        {
            no: "5",
            name: "Azerbaijani",
            native: "آذربایجان دیلی",
            code: "az",
        },
        {
            no: "6",
            name: "Basque",
            native: "Euskara",
            code: "eu",
        },
        {
            no: "7",
            name: "Belarusian",
            native: "Беларуская",
            code: "be",
        },
        {
            no: "8",
            name: "Bulgarian",
            native: "Български",
            code: "bg",
        },
        {
            no: "9",
            name: "Catalan",
            native: "Català",
            code: "ca",
        },
        {
            no: "10",
            name: "Chinese (Simplified)",
            native: "中文简体",
            code: "zh-CN",
        },
        {
            no: "11",
            name: "Chinese (Traditional)",
            native: "中文繁體",
            code: "zh-TW",
        },
        {
            no: "12",
            name: "Croatian",
            native: "Hrvatski",
            code: "hr",
        },
        {
            no: "13",
            name: "Czech",
            native: "Čeština",
            code: "cs",
        },
        {
            no: "14",
            name: "Danish",
            native: "Dansk",
            code: "da",
        },
        {
            no: "15",
            name: "Dutch",
            native: "Nederlands",
            code: "nl",
        },
        {
            no: "16",
            name: "English",
            native: "English",
            code: "en",
        },
        {
            no: "17",
            name: "Estonian",
            native: "Eesti keel",
            code: "et",
        },
        {
            no: "18",
            name: "Filipino",
            native: "Filipino",
            code: "tl",
        },
        {
            no: "19",
            name: "Finnish",
            native: "Suomi",
            code: "fi",
        },
        {
            no: "20",
            name: "French",
            native: "Français",
            code: "fr",
        },
        {
            no: "21",
            name: "Galician",
            native: "Galego",
            code: "gl",
        },
        {
            no: "22",
            name: "Georgian",
            native: "ქართული",
            code: "ka",
        },
        {
            no: "23",
            name: "German",
            native: "Deutsch",
            code: "de",
        },
        {
            no: "24",
            name: "Greek",
            native: "Ελληνικά",
            code: "el",
        },
        {
            no: "25",
            name: "Haitian Creole",
            native: "Kreyòl ayisyen",
            code: "ht",
        },
        {
            no: "26",
            name: "Hebrew",
            native: "עברית",
            code: "iw",
        },
        {
            no: "27",
            name: "Hindi",
            native: "हिन्दी",
            code: "hi",
        },
        {
            no: "28",
            name: "Hungarian",
            native: "Magyar",
            code: "hu",
        },
        {
            no: "29",
            name: "Icelandic",
            native: "Íslenska",
            code: "is",
        },
        {
            no: "30",
            name: "Indonesian",
            native: "Bahasa Indonesia",
            code: "id",
        },
        {
            no: "31",
            name: "Irish",
            native: "Gaeilge",
            code: "ga",
        },
        {
            no: "32",
            name: "Italian",
            native: "Italiano",
            code: "it",
        },
        {
            no: "33",
            name: "Japanese",
            native: "日本語",
            code: "ja",
        },
        {
            no: "34",
            name: "Korean",
            native: "한국어",
            code: "ko",
        },
        {
            no: "35",
            name: "Latvian",
            native: "Latviešu",
            code: "lv",
        },
        {
            no: "36",
            name: "Lithuanian",
            native: "Lietuvių kalba",
            code: "lt",
        },
        {
            no: "37",
            name: "Macedonian",
            native: "Македонски",
            code: "mk",
        },
        {
            no: "38",
            name: "Malay",
            native: "Malay",
            code: "ms",
        },
        {
            no: "39",
            name: "Maltese",
            native: "Malti",
            code: "mt",
        },
        {
            no: "40",
            name: "Norwegian",
            native: "Norsk",
            code: "no",
        },
        {
            no: "41",
            name: "Persian",
            native: "فارسی",
            code: "fa",
        },
        {
            no: "42",
            name: "Polish",
            native: "Polski",
            code: "pl",
        },
        {
            no: "43",
            name: "Portuguese",
            native: "Português",
            code: "pt",
        },
        {
            no: "44",
            name: "Romanian",
            native: "Română",
            code: "ro",
        },
        {
            no: "45",
            name: "Russian",
            native: "Русский",
            code: "ru",
        },
        {
            no: "46",
            name: "Serbian",
            native: "Српски",
            code: "sr",
        },
        {
            no: "47",
            name: "Slovak",
            native: "Slovenčina",
            code: "sk",
        },
        {
            no: "48",
            name: "Slovenian",
            native: "Slovensko",
            code: "sl",
        },
        {
            no: "49",
            name: "Spanish",
            native: "Español",
            code: "es",
        },
        {
            no: "50",
            name: "Swahili",
            native: "Kiswahili",
            code: "sw",
        },
        {
            no: "51",
            name: "Swedish",
            native: "Svenska",
            code: "sv",
        },
        {
            no: "52",
            name: "Thai",
            native: "ไทย",
            code: "th",
        },
        {
            no: "53",
            name: "Turkish",
            native: "Türkçe",
            code: "tr",
        },
        {
            no: "54",
            name: "Ukrainian",
            native: "Українська",
            code: "uk",
        },
        {
        no: "55",
        name: "Urdu",
        native: "اردو",
        code: "ur",
        },
        {
        no: "56",
        name: "Vietnamese",
        native: "Tiếng Việt",
        code: "vi",
        },
        {
        no: "57",
        name: "Welsh",
        native: "Cymraeg",
        code: "cy",
        },
        {
        no: "58",
        name: "Yiddish",
        native: "ייִדיש",
        code: "yi",
        },
    ];

## For Html/CSS/JavaScript Projects

You can also implement it in a simple html/css/javascript project. 

Just install langsync@1.2.0 version 

    npm i langsync@1.2.0

and then add it as a script file in the html body. Then you are able to use all functions as metioned above.
	
    <script  src=“./node_modules/langsync/index.js” ></script>


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

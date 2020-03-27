# mod-tools
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4 using ES2018.

## Installation instructions

Clone the project and run `npm install` command to install all dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running lint

Run `ng lint` command to linting code by tslint tool.

## Description

A list of tasks with review criteria can be viewed follow the link (https://docs.google.com/document/d/1lGY5nLUkgmyYZczeHybS0eSWvhny644yPFo9WMkUIes/edit).

## Flow
You can type in a phrase in the search bar at the top of the screen and send it into the backend API to diagnose this phrase. All API requests located in shared-components/api-data/api-data.service.ts. The service has requested that are related to the response from the API. We can choose client data such as language, content type, and client.

After receiving a response from the API, the text is diagnosed in the presence of obscene. The first line of the keyword is marked in gray, because it is the original string obtained from the search field. The second line of the phrase displays the result of text diagnostics for the presence of obscene and grouped words. On the right, there is a sidebar that displays the topics and the number of topics used in a phrase. Also, whether or not this list of topics will pass in the policy guide. The AI Prediction is calculated below. Above the sidebar there is a toggle for viewing deep text analysis. Analysis consists of spelling errors, what caused which tag will be on obscene words.
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

## Helpful recommendations

1. There are many components in the code that are connected with each other. This connection is implemented with the help of EventEmmiter and Input Output directives, which generates extra code. It makes sense when we have a simple application and it doesn't make sense to organize a simultaneous connection between many components. I suggest to use Observable in services to be able to subscribe to changes from the service to the component, so we can get the value from anywhere in the application. The second option is to use the Flux architecture (implementation in Angular - ngrx). In React.js library this implementation is a Redux library. Both variants allow us to monitor and react to all changes in dependent components in a continuous mode.


2.In the user service, I noticed a check for the user existence, if there is no user, we use mock data. All of the checking logic must be realized on the server side to display correct user data. This includes authorization, authentication and token lifetime. Client part and its logic serve only for correct display of necessary content. Everything else is a backend job.

3. Also in the user service, using get and set methods is not the best solution. For some particular objects, we should use the Object.defineProperty method, in which we can specify get set methods. All state variables of the service (as well as class) should be private. This is one of the basics of OOP. Encapsulation. We cannot directly refer to such variables and change their values or types, so that we do not accidentally break the existing code.
And assigning a value is done through service methods, which allows us to easily refer to this variable and set its value if the method allows it. This makes the code more clear and readable and saves us from unnecessary errors. 


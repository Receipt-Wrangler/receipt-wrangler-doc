# Desktop/Web

Receipt Wrangler desktop is an Angular application.  
Below we'll go through on setting it up in a development environment, and how some of the technologies used.

## Prerequisites
* Node latest LTS version https://nodejs.org/en/download
* Angular CLI run ```npm install -g @angular/cli```

## Setup
1. Clone the repository
2. Open a terminal and navigate to the root of the project
3. Run ```npm install```
4. Run ```npm run start```

## Running the application
If no API changes are needed, developers can simply point the API calls to a different backend.
This can be done by the following steps:
1. Open ```app.module.ts```
2. Modify the ```baseUrl``` in the api module to point to somewhere else, https://demo.receipt.wrangler.io/api for example.

## Testing
Unit tests are crucial to keeping the application stable during development, refactors, ect. There are quite a few tests in place already, with a pretty solid pattern.
Unit tests are also a much appreciated way to contribute to the project, as they are a great way to get familiar with the codebase, and helps promote the health of the application.

To run the tests, simply run ```npm run test```

## Important Technologies Used
* Angular https://angular.io/
* Angular Material https://material.angular.io/
* NGXS https://ngxs.io/
* OpenAPI Generated Client https://www.openapis.org/
* Karma/Jasmine for unit tests https://karma-runner.github.io/latest/index.html


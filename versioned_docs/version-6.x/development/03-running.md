# Running API/Desktop

## API

Receipt Wrangler API is a Go application. Below we'll go through on setting it up in a development environment, and walk
through some of the important technologies.

### Tech overview

This project uses:

- Go for API
- Python for Imap client
- mariadb/mysql/postgresql/sqlite for database
- GORM as the ORM (currently no migration tracking. Any needed data backpops/fixes are done after deployment via
  endpoint)
- Overall, no framework is used for the API
- Uses built in test runner
- Uses OpenAPI 3.0, maintained by hand to generate clients.

### Running the application
1\. Navigate to the root directory  
2\. Run 
```bash
go run .
``` 
3\. Once the application is running it will be running on `http://0.0.0.0:8081`, and will accept connections from the mobile
app, and desktop app.

## Desktop/Web

Receipt Wrangler desktop is an Angular application.  
Below we'll go through on setting it up in a development environment, and walk through some of the important
technologies.

### Tech overview

* Angular https://angular.io/
* Angular Material https://material.angular.io/
* NGXS https://ngxs.io/
* OpenAPI Generated Client https://www.openapis.org/
* Karma/Jasmine for unit tests https://karma-runner.github.io/latest/index.html


### Running the application

If no API changes are needed, developers can simply point the API calls to a different backend.
This can be done by the following steps:

1. Open ```app.module.ts```
2. Modify the ```baseUrl``` in the api module to point to somewhere else, https://dev.receiptwrangler.io/api for
   example, then continue to the next steps.

:::note

Feel free to dev against https://dev.receiptwrangler.io/api. This is a shared environment for developers to develop
against.

:::

:::warning

If you decide to modify the app.module.ts, the server you are connecting to must be over https due to browser rejecting
insecure cross-origin cookies.

:::

3. Navigate to the root directory of the project
4. Run ```npm install```
5. Run ```npm run start```


### Testing

Unit tests are crucial to keeping the application stable during development, refactors, ect. There are quite a few tests
in place already, with a pretty solid pattern.
Unit tests are also a much appreciated way to contribute to the project, as they are a great way to get familiar with
the codebase, and helps promote the health of the application.

To run the tests, simply run ```npm run test```

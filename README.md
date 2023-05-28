# xCoin API - Test project for refactoring

summarize of what I have done on the project to improve productivity and prepare for production.

## Table of contents

- Change the project architecture
- Data validation strategy
- Use gzip compression
- Use Helmet module
- Add swagger

## Change the project architecture
changing the project architecture to be more flexible as the project grows. This will increase the code readability and make it easier to understand as the project becomes more complex and needs more maintenance

## Data validation strategy
A data validation strategy makes it easier for you to ensure that you can focus on building the API, and allow for the frontend to handle validation errors

## Use gzip compression
Gzip compressing can greatly decrease the size of the response body and hence increase the speed of a web app. Use the compression middleware for gzip compression in your your app

## Use Helmet module
Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.

## Add swagger
For frontend team, and also it can be a good document for the project, I just setup Swagger. There should be additional information added to each route.

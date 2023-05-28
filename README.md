# xCoin API - Test project for refactoring

summarize of what I have done on the project to improve productivity and prepare for production.

## Table of contents

- Change the project architecture
- Use gzip compression
- Use Helmet module
- Add swagger

## Change the project architecture
changing the project architecture to be more flexible as the project grows. It should be more readable and easier to maintain. This will increase the code readability and make it easier to understand as the project becomes more complex and needs more maintenance


## Use gzip compression
Gzip compressing can greatly decrease the size of the response body and hence increase the speed of a web app. Use the compression middleware for gzip compression in your your app

## Use Helmet module
Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.

## Add swagger
For frontend team, and also it can be a good document for the project, I just setup Swagger. There should be additional information added to each route.

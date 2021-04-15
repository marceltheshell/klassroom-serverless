# klassroom-serverless


## To Install Dependencies
```
npm run build-all
``` 
## To Deploy 
```bash

sam build
sam deploy --guided
```
## To test using local invoke
sam local invoke --event <event>
ex: sam local invoke --event ./tests/events/healthCheck.json


## Unit tests
Unit tests are written using the Jest framework.  Useful links:
https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname 
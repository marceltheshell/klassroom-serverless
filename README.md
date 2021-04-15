# klassroom-serverless

Please keep this documentation up to date, this is part of the definition of done.

The [Serverless Developer Guidelines](https://wiki.autodesk.com/display/EFDE/Serverless+Developer+Guidelines) should be followed when developing serverless applications.
Also, use the lambda coding style guide for developing the lambda functions in the this repository.


## Installation and Setup
1. Install node (v10.15.0)
2. Clone the Repository
3. Install dependencies from within Klassroom-Serverless root directory
```npm run build-all```

## To Deploy 
```bash

sam build
sam deploy --guided
```
## To test using local invoke
sam local invoke --event <event>
ex: sam local invoke --event ./tests/events/classes/createClass.json


## Unit tests
Unit tests are written using the Jest framework.  Useful links:
https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname 
const teacherService = require('../../lambdas/klassroom/lib/teachers.js'); 
const dynamodb = require('aws-sdk/clients/dynamodb'); 
 
describe('Test getByIdHandler', () => { 
    let getSpy; 
 
    beforeAll(() => { 
        // https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname 
        getSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'get'); 
    }); 
 
    afterAll(() => { 
        getSpy.mockRestore(); 
    });
});
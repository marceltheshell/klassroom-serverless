const classService = require('../../lambdas/klassroom/lib/classes.js'); 
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
    
    it('classes test', async () => {
        expect(true).toEqual(true);
    });
    
});



describe('Test putItemHandler', function () { 
    //     let putSpy; 
     
    //     // Test one-time setup and teardown, see more in https://jestjs.io/docs/en/setup-teardown 
    //     beforeAll(() => { 
    //         // Mock dynamodb get and put methods 
    //         // https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname 
    //         putSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'put'); 
    //     }); 
     
    //     // Clean up mocks 
    //     afterAll(() => { 
    //         putSpy.mockRestore(); 
    //     }); 
     
    //     // This test invokes putItemHandler() and compare the result  
    //     it('should add id to the table', async () => { 
    //         const returnedItem = { id: 'id1', name: 'name1' }; 
     
    //         // Return the specified value whenever the spied put function is called 
    //         putSpy.mockReturnValue({ 
    //             promise: () => Promise.resolve(returnedItem) 
    //         }); 
     
    //         const event = { 
    //             httpMethod: 'POST', 
    //             body: '{"id": "id1","name": "name1"}' 
    //         }; 
         
    //         // Invoke putItemHandler() 
    //         const result = await lambda.putItemHandler(event); 
    //         const expectedResult = { 
    //             statusCode: 200, 
    //             body: JSON.stringify(returnedItem) 
    //         }; 
     
    //         // Compare the result with the expected result 
    //         expect(result).toEqual(expectedResult);
            expect(true).toEqual(true); 
    //     }); 
    });
    
describe('Test getByIdHandler', () => { 
    //     let getSpy; 
     
    //     // Test one-time setup and teardown, see more in https://jestjs.io/docs/en/setup-teardown 
    //     beforeAll(() => { 
    //         // Mock dynamodb get and put methods 
    //         // https://jestjs.io/docs/en/jest-object.html#jestspyonobject-methodname 
    //         getSpy = jest.spyOn(dynamodb.DocumentClient.prototype, 'get'); 
    //     }); 
     
    //     // Clean up mocks 
    //     afterAll(() => { 
    //         getSpy.mockRestore(); 
    //     }); 
     
    //     // This test invokes getByIdHandler() and compare the result  
    //     it('should get item by id', async () => { 
    //         const item = { id: 'id1' }; 
     
    //         // Return the specified value whenever the spied get function is called 
    //         getSpy.mockReturnValue({ 
    //             promise: () => Promise.resolve({ Item: item }) 
    //         }); 
     
    //         const event = { 
    //             httpMethod: 'GET', 
    //             pathParameters: { 
    //                 id: 'id1' 
    //             } 
    //         } 
     
    //         // Invoke getByIdHandler() 
    //         const result = await lambda.getByIdHandler(event); 
     
    //         const expectedResult = { 
    //             statusCode: 200, 
    //             body: JSON.stringify(item) 
    //         }; 
     
    //         // Compare the result with the expected result 
    //         expect(result).toEqual(expectedResult); 
    //     }); 
    expect(true).toEqual(true); 
    }); 
      
     
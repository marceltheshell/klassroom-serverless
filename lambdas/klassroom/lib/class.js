const response = require('./response');
exports.classRouter = async (event) => {
    console.log('The incoming method is:', event.httpMethod);
    
    switch (event.httpMethod) {
        case 'DELETE':
            return deleteClass(event);
        case 'GET':
            return getClass(event);
        case 'POST':
            return saveClass(event);
        case 'PUT':
            return updateClass(event);
        default:
            return sendResponse(500, `Unsupported method "${event.httpMethod}"`);
    }
};

const deleteClass = () => {}
const getClass = () => { }
const saveClass = () => {};
const updateClass = () => {};



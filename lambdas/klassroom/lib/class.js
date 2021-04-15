const response = require('./response');

exports.classRouter = async (event) => {
    console.log('The incoming method is:', event.httpMethod);
    
    switch (event.httpMethod) {
        case 'DELETE':
            return await deleteClass(event);
        case 'GET':
            return await getClass(event);
        case 'POST':
            return await saveClass(event);
        case 'PUT':
            return await updateClass(event);
        default:
            return sendResponse(500, `Unsupported method "${event.httpMethod}"`);
    }
};

const saveClass = async (event) => {
	// const item = JSON.parse(event.body);
	// item.itemId = uuidv1();

	// return databaseManager.saveItem(item).then(response => {
	// 	console.log(response);
	// 	return sendResponse(200, item.itemId);
	// });
}

const deleteClass = async (event) => {}
const getClass = async (event) => {}
const updateClass = async (event) => {}




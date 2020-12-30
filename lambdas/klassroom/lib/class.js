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

function saveClass(event) {
	const item = JSON.parse(event.body);
	item.itemId = uuidv1();

	return databaseManager.saveItem(item).then(response => {
		console.log(response);
		return sendResponse(200, item.itemId);
	});
}




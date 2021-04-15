const response = require('./response');

exports.schoolRouter = async (event) => {
    console.log('The incoming method is:', event.method);
    
    switch (event.method) {
        case 'DELETE':
            return await deleteSchool(event);
        case 'GET':
            return await getSchool(event);
        case 'POST':
            return await saveSchool(event);
        case 'PUT':
            return await updateSchool(event);
        default:
            return sendResponse(500, `Unsupported method "${event.method}"`);
    }
};

const saveSchool = async (event) => {
	// const item = JSON.parse(event.body);
	// item.itemId = uuidv1();

	// return databaseManager.saveItem(item).then(response => {
	// 	console.log(response);
	// 	return sendResponse(200, item.itemId);
	// });
}

const deleteSchool = async (event) => {}
const getSchool = async (event) => {}
const updateSchool = async (event) => {}


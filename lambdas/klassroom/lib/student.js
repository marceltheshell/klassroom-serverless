const response = require('./response');

exports.studentRouter = async (event) => {
    console.log('The incoming method is:', event.httpMethod);
    
    switch (event.httpMethod) {
        case 'DELETE':
            return await deleteStudent(event);
        case 'GET':
            return await getStudent(event);
        case 'POST':
            return await saveStudent(event);
        case 'PUT':
            return await updateStudent(event);
        default:
            return sendResponse(500, `Unsupported method "${event.httpMethod}"`);
    }
};

const saveStudent = async (event) => {
	// const item = JSON.parse(event.body);
	// item.itemId = uuidv1();

	// return databaseManager.saveItem(item).then(response => {
	// 	console.log(response);
	// 	return sendResponse(200, item.itemId);
	// });
}

const deleteStudent = async (event) => {}
const getStudent = async (event) => {}
const updateStudent = async (event) => {}


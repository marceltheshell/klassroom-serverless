const response = require('./response');

exports.teacherRouter = async (event) => {
    console.log('The incoming method is:', event.method);
    
    switch (event.method) {
        case 'DELETE':
            return await deleteTeacher(event);
        case 'GET':
            return await getTeacher(event);
        case 'POST':
            return await saveTeacher(event);
        case 'PUT':
            return await updateTeacher(event);
        default:
            return sendResponse(500, `Unsupported method "${event.method}"`);
    }
};

const saveTeacher = async (event) => {
	// const item = JSON.parse(event.body);
	// item.itemId = uuidv1();

	// return databaseManager.saveItem(item).then(response => {
	// 	console.log(response);
	// 	return sendResponse(200, item.itemId);
	// });
}

const deleteTeacher = async (event) => {}
const getTeacher = async (event) => {}
const updateTeacher = async (event) => {}


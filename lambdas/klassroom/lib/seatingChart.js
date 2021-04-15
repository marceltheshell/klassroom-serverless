const response = require('./response');

exports.seatingChartRouter = async (event) => {
    console.log('The incoming method is:', event.method);
    
    switch (event.method) {
        case 'DELETE':
            return await deleteSeatingChart(event);
        case 'GET':
            return await getSeatingChart(event);
        case 'POST':
            return await saveSeatingChart(event);
        case 'PUT':
            return await updateSeatingChart(event);
        default:
            return sendResponse(500, `Unsupported method "${event.method}"`);
    }
};

const saveSeatingChart = async (event) => {
	// const item = JSON.parse(event.body);
	// item.itemId = uuidv1();

	// return databaseManager.saveItem(item).then(response => {
	// 	console.log(response);
	// 	return sendResponse(200, item.itemId);
	// });
}

const deleteSeatingChart = async (event) => {}
const getSeatingChart = async (event) => {}
const updateSeatingChart = async (event) => {}


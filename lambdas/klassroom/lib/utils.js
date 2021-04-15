const classService = require('./class');
const schoolService = require('./school');
const seatingChartService = require('./seatingChart');
const studentService = require('./student');
const teacherService = require('./teacher');
const response = require('./response');
const healthCheckService = require('./healthCheck');

exports.router = async (event) => {
    const path = event.path;
    console.log('The incoming path is:', path);
    
    switch(path) {
        case '/class':
            return await classService.classRouter(event);
        case '/school':
            return await schoolService.schoolRouter(event);
        case '/seatingChart':
            return await seatingChartService.seatingChartRouter(event);
        case '/student':
            return await studentService.studentRouter(event);
        case '/teacher':
            return await teacherService.teacherRouter(event);
        case '/health':
            return healthCheckService.healthCheck();
        default:
            return response.buildResponse(500, 'No path was found in router')
    }
}
const classService = require('./class');
const schoolService = require('./school');
const seatingChartService = require('./seatingChart');
const studentService = require('./student');
const teacherService = require('./teacher');
const response = require('./response');
const healthCheckService = require('./healthCheck');

function router(event) {
    const path = event.path;
    console.log('The incoming path is:', path);
    
    switch(path) {
        case '/class':
            return classService.classRouter(event);
        case '/school':
            return schoolService.schoolRouter(event);
        case '/seatingChart':
            return seatingChartService.seatingChartRouter(event);
        case '/student':
            return studentService.studentRouter(event);
        case '/teacher':
            return teacherService.teacherRouter(event);
        case '/health':
            return healthCheckService.healthCheck();
        default:
            return response.buildResponse(500, 'No path was found in router')
    }
}

module.exports = {
    router
};
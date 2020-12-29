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
        case '/classes':
            return classService.classRouter(event);
        case '/schools':
            return schoolService.schoolRouter(event);
        case '/seatingCharts':
            return seatingChartService.seatingChartRouter(event);
        case '/students':
            return studentService.studentRouter(event);
        case '/teachers':
            return teacherService.teacherRouter(event);
        case '/healthCheck':
            return healthCheckService.healthCheck();
        default:
            return response.buildResponse(500, 'No path was found in router')
    }
}

module.exports = {
    router
};
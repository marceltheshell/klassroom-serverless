const classService = require('./classes');
const schoolService = require('./schools');
const seatingChartService = require('./seatingCharts');
const studentService = require('./students');
const teacherService = require('./teachers');
const response = require('./response');

function router(event) {
    const path = event.path;
    console.log('The incoming path is:', path);
    
    switch(path) {
        case '/classes':
            return teacherService.router(event);
        case '/schools':
            return teacherService.router(event);
        case '/seatingCharts':
            return teacherService.router(event);
        case '/students':
            return teacherService.router(event);
        case 'teachers':
            return teacherService.router(event);
        default:
            return response.buildResponse(500, 'No path was found in router')
    }
}

module.exports = {
    router
};
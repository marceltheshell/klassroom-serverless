const utils = require('../../lambdas/klassroom/lib/utils.js');
const classService = require('../../lambdas/klassroom/lib/classes');
const schoolService = require('../../lambdas/klassroom/lib/schools');
const seatingChartService = require('../../lambdas/klassroom/lib/seatingCharts');
const studentService = require('../../lambdas/klassroom/lib/students');
const teacherService = require('../../lambdas/klassroom/lib/teachers');

describe('Tests utils', () => {
    it('if path is /classes it should call classService', async () => {
        const mockEvent = {
            path: '/classes'
        };
        const spy = jest.spyOn(classService, 'classesRouter');
        utils.router(mockEvent);
        expect(spy).toHaveBeenCalled();
    }); 
    it('if path is /schools it should call schoolService', async () => {}); 
    it('if path is /seatingCharts it should call seatingChartService', async () => {}); 
    it('if path is /students it should call studentService', async () => {}); 
    it('if path is /teachers it should call teachersService', async () => {}); 
});
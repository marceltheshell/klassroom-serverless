const utils = require('../../lambdas/klassroom/lib/utils.js');
const classService = require('../../lambdas/klassroom/lib/class');
const schoolService = require('../../lambdas/klassroom/lib/school');
const seatingChartService = require('../../lambdas/klassroom/lib/seatingChart');
const studentService = require('../../lambdas/klassroom/lib/student');
const teacherService = require('../../lambdas/klassroom/lib/teacher');

describe('Tests utils', () => {
    it.only('if path is /classes it should call classService', async () => {
        const mockEvent = {
            path: '/classes'
        };
        classService.classesRouter = jest.fn().mockReturnValue('GOTCHA');
        // const spy = jest.spyOn(classService, 'classesRouter')
        const x = utils.router(mockEvent);
        console.log(111111, x)
        
    }); 
    it('if path is /schools it should call schoolService', async () => {}); 
    it('if path is /seatingCharts it should call seatingChartService', async () => {}); 
    it('if path is /students it should call studentService', async () => {}); 
    it('if path is /teachers it should call teachersService', async () => {}); 
});
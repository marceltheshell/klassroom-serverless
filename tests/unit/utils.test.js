const utils = require('../../lambdas/klassroom/lib/utils.js');
const classService = require('../../lambdas/klassroom/lib/class');
const schoolService = require('../../lambdas/klassroom/lib/school');
const seatingChartService = require('../../lambdas/klassroom/lib/seatingChart');
const studentService = require('../../lambdas/klassroom/lib/student');
const teacherService = require('../../lambdas/klassroom/lib/teacher');

describe('Tests utils', () => {
    beforeEach(() => {
        let mockEvent;
        let spy;
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('if path is /classes it should call classService', async () => {
        mockEvent = {
            path: '/classes'
        };
        spy = jest.spyOn(classService, 'classRouter').mockImplementation(() => {});
        utils.router(mockEvent);
        expect(spy).toHaveBeenCalled();
    }); 
    it('if path is /schools it should call schoolService', async () => {});
        mockEvent = {
            path: '/schools'
        };
        spy = jest.spyOn(schoolService, 'schoolRouter').mockImplementation(() => {});
        utils.router(mockEvent);
        expect(spy).toHaveBeenCalled(); 
    it('if path is /seatingCharts it should call seatingChartService', async () => {}); 
        mockEvent = {
            path: '/seatingCharts'
        };
        spy = jest.spyOn(seatingChartService, 'seatingChartRouter').mockImplementation(() => {});
        utils.router(mockEvent);
        expect(spy).toHaveBeenCalled();
    it('if path is /students it should call studentService', async () => {});
        mockEvent = {
            path: '/students'
        };
        spy = jest.spyOn(studentService, 'studentRouter').mockImplementation(() => {});
        utils.router(mockEvent);
        expect(spy).toHaveBeenCalled();
    it('if path is /teachers it should call teachersService', async () => {
        mockEvent = {
            path: '/teachers'
        };
        spy = jest.spyOn(teacherService, 'teacherRouter').mockImplementation(() => {});
        utils.router(mockEvent);
        expect(spy).toHaveBeenCalled();
    });

    it('if path is /healthCheck it should call return health check response', async () => {
        mockEvent = {
            path: '/healthCheck'
        };
        const healthResponse = { statusCode: 200, body: 'Health is in tip top shape.' };
        const resp = utils.router(mockEvent);
        expect(resp).toEqual(healthResponse);
    }); 
});
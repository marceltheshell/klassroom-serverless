function classRouter(event) {
    const method = event.method;
    console.log('The incoming method is:', method);
    
    switch(method) {
        case '/GET':
            //
        case '/POST':
            //
        case '/PUT':
            //
        case '/DELETE':
            //
        default:
            return response.buildResponse(500, 'Method was not recognized')
    }
}

module.exports = {
    classRouter
}
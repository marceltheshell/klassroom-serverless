exports.buildResponse = (statusCode, body) => {
    const response = {
      statusCode,
      body
    };
    console.log('Response in buildResponse:', response);
    return response;
}
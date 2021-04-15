const response = require('./response');
exports.healthCheck = () => {
  return response.buildResponse(200, 'Health is in tip top shape.');
}
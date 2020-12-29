const response = require('./response');
function healthCheck() {
  return response.buildResponse(200, 'Health is in tip top shape.');
}
module.exports = {
    healthCheck
}
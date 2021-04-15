const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();
const tableName = process.env.SAMPLE_TABLE;
const utils = require('./lib/utils');
const response = require('./lib/response');

exports.handler = async (event) => {
    console.log("The incoming event: ", event);
    try {
        return await utils.router(event);
    } catch (err) {
        return response.buildResponse(500, err);
    }
}

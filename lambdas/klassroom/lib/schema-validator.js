const response = require('./response');

/**
 * @module libs/schema-validator
 * @desc Utility to validate the schema for requests.
 */

 const Ajv = require('ajv');
 const ajv = new Ajv({ allErrors: true });
 
 class SchemaValidator {
   static get GET() { return 'GET'; }
 
   static get POST() { return 'POST'; }
 
   static get PUT() { return 'PUT'; }
 
   static get DELETE() { return 'DELETE'; }
 
   /**
    * Function to validate a JSON schema (v6)
    *
    * @param {Object} schemaFile - the JSON schema file
    * @param {Object} data - the data to be validated
    */
   validate(schemaFile, data) {
     const valid = ajv.validate(schemaFile, data);
     if (!valid) {
       this.ajvErrors = ajv.errors;
     }
     return valid;
   }
 
   /**
    * Function to get errors
    */
   get errors() {
     if (this.ajvErrors) {
       this.ajvErrors.forEach((error) => {
         delete error.keyword;
         delete error.schemaPath;
       });
       return this.ajvErrors;
     }
     return null;
   }
 }
 


/**
 * Function to validate request payload
 *
 * @param {Object} schemaFile - contains the schema definition
 * @param {Object} payload - contains the request payload
 */
exports.validateSchema = (schemaFile, payload) => {
  if (!schemaFile) {
    return response.buildResponse(500, 'no schema found');
  }
  // check the schema
  const schemaValidator = new SchemaValidator();
  if (!schemaValidator.validate(schemaFile, payload)) {
    const schemaErrors = schemaValidator.errors;
    return response.buildResponse(500, schemaErrors);
  }
  return response.buildResponse(200, 'success building schema');
}
 
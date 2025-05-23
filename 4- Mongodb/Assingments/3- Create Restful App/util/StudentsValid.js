// Imports
    const Ajv = require("ajv").default;

// Create JSON Schema
    const schema = {
        "type": "object",
        "properties": {
            "fn": {
                "type": "string",
                "pattern": "^[A-Z][a-z]*$"
            },
            "ln": {
                "type": "string",
                "pattern": "^[A-Z][a-z]*$"
            },
            "dept": {
                "type": "string",
                "enum": ["SD", "SA", "MD"],
                "maxLength": 2,
                "minLength": 2
            }
        },
        "required": ["fn", "ln", "dept"],
    }

// Validation
const ajv = new Ajv();
module.exports = ajv.compile(schema);
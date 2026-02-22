"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAssistantMessage = validateAssistantMessage;
exports.validateUiFrame = validateUiFrame;
exports.validateUiSubmit = validateUiSubmit;
exports.validateTurnRequest = validateTurnRequest;
exports.validateTurnResponse = validateTurnResponse;
const _2020_js_1 = __importDefault(require("ajv/dist/2020.js"));
const assistant_message_schema_json_1 = __importDefault(require("./schemas/assistant_message.schema.json"));
const ui_frame_schema_json_1 = __importDefault(require("./schemas/ui_frame.schema.json"));
const ui_submit_schema_json_1 = __importDefault(require("./schemas/ui_submit.schema.json"));
const turn_request_schema_json_1 = __importDefault(require("./schemas/turn_request.schema.json"));
const turn_response_schema_json_1 = __importDefault(require("./schemas/turn_response.schema.json"));
const components_schema_json_1 = __importDefault(require("./schemas/components.schema.json"));
const actions_schema_json_1 = __importDefault(require("./schemas/actions.schema.json"));
const ajv = new _2020_js_1.default({ allErrors: true, strict: true });
ajv.addSchema(components_schema_json_1.default, "components.schema.json");
ajv.addSchema(actions_schema_json_1.default, "actions.schema.json");
const validateAssistantMessageSchema = ajv.compile(assistant_message_schema_json_1.default);
const validateUiFrameSchema = ajv.compile(ui_frame_schema_json_1.default);
const validateUiSubmitSchema = ajv.compile(ui_submit_schema_json_1.default);
const validateTurnRequestSchema = ajv.compile(turn_request_schema_json_1.default);
const validateTurnResponseSchema = ajv.compile(turn_response_schema_json_1.default);
function runValidation(validator, payload) {
    if (validator(payload)) {
        return { ok: true };
    }
    return { ok: false, errors: validator.errors };
}
function validateAssistantMessage(payload) {
    return runValidation(validateAssistantMessageSchema, payload);
}
function validateUiFrame(payload) {
    return runValidation(validateUiFrameSchema, payload);
}
function validateUiSubmit(payload) {
    return runValidation(validateUiSubmitSchema, payload);
}
function validateTurnRequest(payload) {
    return runValidation(validateTurnRequestSchema, payload);
}
function validateTurnResponse(payload) {
    return runValidation(validateTurnResponseSchema, payload);
}

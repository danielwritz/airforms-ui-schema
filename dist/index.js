"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const assistant_message_schema_json_1 = __importDefault(require("./schemas/assistant_message.schema.json"));
const ui_frame_schema_json_1 = __importDefault(require("./schemas/ui_frame.schema.json"));
const ui_submit_schema_json_1 = __importDefault(require("./schemas/ui_submit.schema.json"));
const components_schema_json_1 = __importDefault(require("./schemas/components.schema.json"));
const actions_schema_json_1 = __importDefault(require("./schemas/actions.schema.json"));
__exportStar(require("./types"), exports);
__exportStar(require("./validate"), exports);
exports.schemas = {
    assistantMessageSchema: assistant_message_schema_json_1.default,
    uiFrameSchema: ui_frame_schema_json_1.default,
    uiSubmitSchema: ui_submit_schema_json_1.default,
    componentsSchema: components_schema_json_1.default,
    actionsSchema: actions_schema_json_1.default
};

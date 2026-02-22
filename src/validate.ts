import Ajv2020, { type ErrorObject, type ValidateFunction } from "ajv/dist/2020.js";
import assistantMessageSchema from "./schemas/assistant_message.schema.json";
import uiFrameSchema from "./schemas/ui_frame.schema.json";
import uiSubmitSchema from "./schemas/ui_submit.schema.json";
import turnRequestSchema from "./schemas/turn_request.schema.json";
import turnResponseSchema from "./schemas/turn_response.schema.json";
import componentsSchema from "./schemas/components.schema.json";
import actionsSchema from "./schemas/actions.schema.json";
import type {
  AssistantMessage,
  TurnRequest,
  TurnResponse,
  UiFrame,
  UiSubmit
} from "./types";

export type ValidationResult =
  | { ok: true }
  | { ok: false; errors: ErrorObject[] | null | undefined };

const ajv = new Ajv2020({ allErrors: true, strict: true });

ajv.addSchema(componentsSchema, "components.schema.json");
ajv.addSchema(actionsSchema, "actions.schema.json");

const validateAssistantMessageSchema = ajv.compile<AssistantMessage>(assistantMessageSchema);
const validateUiFrameSchema = ajv.compile<UiFrame>(uiFrameSchema);
const validateUiSubmitSchema = ajv.compile<UiSubmit>(uiSubmitSchema);
const validateTurnRequestSchema = ajv.compile<TurnRequest>(turnRequestSchema);
const validateTurnResponseSchema = ajv.compile<TurnResponse>(turnResponseSchema);

function runValidation<T>(validator: ValidateFunction<T>, payload: unknown): ValidationResult {
  if (validator(payload)) {
    return { ok: true };
  }

  return { ok: false, errors: validator.errors };
}

export function validateAssistantMessage(payload: unknown): ValidationResult {
  return runValidation(validateAssistantMessageSchema, payload);
}

export function validateUiFrame(payload: unknown): ValidationResult {
  return runValidation(validateUiFrameSchema, payload);
}

export function validateUiSubmit(payload: unknown): ValidationResult {
  return runValidation(validateUiSubmitSchema, payload);
}

export function validateTurnRequest(payload: unknown): ValidationResult {
  return runValidation(validateTurnRequestSchema, payload);
}

export function validateTurnResponse(payload: unknown): ValidationResult {
  return runValidation(validateTurnResponseSchema, payload);
}

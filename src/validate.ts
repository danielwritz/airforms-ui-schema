import Ajv2020, { type ErrorObject, type ValidateFunction } from "ajv/dist/2020.js";
import assistantMessageSchema from "./schemas/assistant_message.schema.json";
import uiFrameSchema from "./schemas/ui_frame.schema.json";
import uiSubmitSchema from "./schemas/ui_submit.schema.json";
import componentsSchema from "./schemas/components.schema.json";
import actionsSchema from "./schemas/actions.schema.json";
import type { AssistantMessage, UiFrame, UiSubmit } from "./types";

export type ValidationResult<T> =
  | { ok: true; data: T }
  | { ok: false; errors: ErrorObject[] | null | undefined };

const ajv = new Ajv2020({ allErrors: true, strict: true });

ajv.addSchema(componentsSchema, "components.schema.json");
ajv.addSchema(actionsSchema, "actions.schema.json");

const validateAssistantMessageSchema = ajv.compile<AssistantMessage>(assistantMessageSchema);
const validateUiFrameSchema = ajv.compile<UiFrame>(uiFrameSchema);
const validateUiSubmitSchema = ajv.compile<UiSubmit>(uiSubmitSchema);

function runValidation<T>(validator: ValidateFunction<T>, payload: unknown): ValidationResult<T> {
  if (validator(payload)) {
    return { ok: true, data: payload as T };
  }

  return { ok: false, errors: validator.errors };
}

export function validateAssistantMessage(payload: unknown): ValidationResult<AssistantMessage> {
  return runValidation(validateAssistantMessageSchema, payload);
}

export function validateUiFrame(payload: unknown): ValidationResult<UiFrame> {
  return runValidation(validateUiFrameSchema, payload);
}

export function validateUiSubmit(payload: unknown): ValidationResult<UiSubmit> {
  return runValidation(validateUiSubmitSchema, payload);
}

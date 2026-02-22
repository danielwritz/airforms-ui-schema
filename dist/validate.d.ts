import { type ErrorObject } from "ajv/dist/2020.js";
export type ValidationResult = {
    ok: true;
} | {
    ok: false;
    errors: ErrorObject[] | null | undefined;
};
export declare function validateAssistantMessage(payload: unknown): ValidationResult;
export declare function validateUiFrame(payload: unknown): ValidationResult;
export declare function validateUiSubmit(payload: unknown): ValidationResult;
export declare function validateTurnRequest(payload: unknown): ValidationResult;
export declare function validateTurnResponse(payload: unknown): ValidationResult;

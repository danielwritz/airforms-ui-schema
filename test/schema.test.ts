import { describe, expect, test } from "vitest";
import vacationFrame from "../fixtures/vacation_pin_budget.ui_frame.json";
import insuranceFrame from "../fixtures/insurance_lookup.ui_frame.json";
import insuranceSubmit from "../fixtures/insurance_lookup.ui_submit.json";
import {
  validateAssistantMessage,
  validateUiFrame,
  validateUiSubmit,
  validateTurnRequest,
  validateTurnResponse
} from "../src/validate";

describe("schema fixtures", () => {
  test("vacation frame fixture validates", () => {
    const result = validateUiFrame(vacationFrame);
    expect(result.ok).toBe(true);
  });

  test("insurance frame fixture validates", () => {
    const result = validateUiFrame(insuranceFrame);
    expect(result.ok).toBe(true);
  });

  test("insurance submit fixture validates", () => {
    const result = validateUiSubmit(insuranceSubmit);
    expect(result.ok).toBe(true);
  });

  test("assistant message validates", () => {
    const result = validateAssistantMessage({
      type: "assistant_message",
      text: "Please enter your policy details."
    });

    expect(result.ok).toBe(true);
  });

  test("turn request validates for user_text", () => {
    const result = validateTurnRequest({
      conversationId: "c_123",
      message: {
        type: "user_text",
        text: "I want to check my insurance."
      }
    });

    expect(result.ok).toBe(true);
  });

  test("turn request validates for ui_submit", () => {
    const result = validateTurnRequest({
      conversationId: "c_123",
      message: insuranceSubmit
    });

    expect(result.ok).toBe(true);
  });

  test("turn request validates for llm_result", () => {
    const result = validateTurnRequest({
      conversationId: "c_123",
      message: {
        type: "llm_result",
        text: "The user wants to book travel and needs destination and budget fields."
      }
    });

    expect(result.ok).toBe(true);
  });

  test("turn response validates with assistant message and ui frame", () => {
    const result = validateTurnResponse({
      conversationId: "c_123",
      messages: [
        {
          type: "assistant_message",
          text: "Please enter your policy details."
        }
      ],
      ui: insuranceFrame
    });

    expect(result.ok).toBe(true);
  });
});

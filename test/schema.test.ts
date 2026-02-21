import { describe, expect, test } from "vitest";
import vacationFrame from "../fixtures/vacation_pin_budget.ui_frame.json";
import insuranceFrame from "../fixtures/insurance_lookup.ui_frame.json";
import insuranceSubmit from "../fixtures/insurance_lookup.ui_submit.json";
import {
  validateAssistantMessage,
  validateUiFrame,
  validateUiSubmit
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
});

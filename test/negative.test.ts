import { describe, expect, test } from "vitest";
import {
  validateAssistantMessage,
  validateUiFrame,
  validateUiSubmit
} from "../src/validate";

describe("negative validation", () => {
  test("fails assistant message without text", () => {
    const result = validateAssistantMessage({ type: "assistant_message" });
    expect(result.ok).toBe(false);
  });

  test("fails frame with unknown component type", () => {
    const result = validateUiFrame({
      type: "ui_frame",
      version: "1.0",
      frameId: "bad:component",
      title: "Bad frame",
      state: { values: {} },
      components: [
        {
          id: "x",
          type: "rich_text",
          label: "Unsupported"
        }
      ],
      primaryAction: {
        label: "Submit",
        action: { type: "ui_submit" }
      }
    });

    expect(result.ok).toBe(false);
  });

  test("fails slider when step is zero", () => {
    const result = validateUiFrame({
      type: "ui_frame",
      version: "1.0",
      frameId: "bad:slider",
      title: "Bad slider",
      state: { values: {} },
      components: [
        {
          id: "budget",
          type: "slider",
          label: "Budget",
          min: 100,
          max: 1000,
          step: 0
        }
      ],
      primaryAction: {
        label: "Submit",
        action: { type: "ui_submit" }
      }
    });

    expect(result.ok).toBe(false);
  });

  test("fails submit without frameId", () => {
    const result = validateUiSubmit({
      type: "ui_submit",
      values: {}
    });

    expect(result.ok).toBe(false);
  });
});

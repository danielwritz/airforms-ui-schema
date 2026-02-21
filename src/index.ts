import assistantMessageSchema from "./schemas/assistant_message.schema.json";
import uiFrameSchema from "./schemas/ui_frame.schema.json";
import uiSubmitSchema from "./schemas/ui_submit.schema.json";
import componentsSchema from "./schemas/components.schema.json";
import actionsSchema from "./schemas/actions.schema.json";

export * from "./types";
export * from "./validate";

export const schemas = {
  assistantMessageSchema,
  uiFrameSchema,
  uiSubmitSchema,
  componentsSchema,
  actionsSchema
};

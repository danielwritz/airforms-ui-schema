export type AssistantMessage = {
  type: "assistant_message";
  text: string;
  messageId?: string;
  meta?: Record<string, unknown>;
};

type BaseComponent = {
  id: string;
  label: string;
  required?: boolean;
};

export type TextComponent = BaseComponent & {
  type: "text";
};

export type TextareaComponent = BaseComponent & {
  type: "textarea";
};

export type NumberComponent = BaseComponent & {
  type: "number";
};

export type DateComponent = BaseComponent & {
  type: "date";
};

export type SelectComponent = BaseComponent & {
  type: "select";
  options: Array<{ label: string; value: string }>;
};

export type SliderComponent = BaseComponent & {
  type: "slider";
  min: number;
  max: number;
  step: number;
};

export type MapPinComponent = BaseComponent & {
  type: "map_pin";
};

export type ReviewComponent = BaseComponent & {
  type: "review";
  source?: string;
};

export type Component =
  | TextComponent
  | TextareaComponent
  | NumberComponent
  | DateComponent
  | SelectComponent
  | SliderComponent
  | MapPinComponent
  | ReviewComponent;

export type ActionType = "ui_submit" | "ui_back" | "ui_replace";

export type ActionButton = {
  label: string;
  action: {
    type: ActionType;
  };
};

export type UiFrame = {
  type: "ui_frame";
  version: "1.0";
  frameId: string;
  title: string;
  state: {
    values: Record<string, unknown>;
  };
  components: Component[];
  primaryAction: ActionButton;
};

export type UiSubmit = {
  type: "ui_submit";
  frameId: string;
  values: Record<string, unknown>;
};

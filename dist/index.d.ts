export * from "./types";
export * from "./validate";
export declare const schemas: {
    assistantMessageSchema: {
        $schema: string;
        $id: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            type: {
                const: string;
            };
            text: {
                type: string;
            };
            messageId: {
                type: string;
                minLength: number;
            };
            meta: {
                type: string;
            };
        };
        additionalProperties: boolean;
    };
    uiFrameSchema: {
        $schema: string;
        $id: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            type: {
                const: string;
            };
            version: {
                const: string;
            };
            frameId: {
                type: string;
                minLength: number;
            };
            title: {
                type: string;
                minLength: number;
            };
            state: {
                type: string;
                required: string[];
                properties: {
                    values: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
            };
            components: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            primaryAction: {
                $ref: string;
            };
        };
        additionalProperties: boolean;
    };
    uiSubmitSchema: {
        $schema: string;
        $id: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            type: {
                const: string;
            };
            frameId: {
                type: string;
                minLength: number;
            };
            values: {
                type: string;
            };
        };
        additionalProperties: boolean;
    };
    componentsSchema: {
        $schema: string;
        $id: string;
        title: string;
        oneOf: {
            $ref: string;
        }[];
        $defs: {
            baseComponent: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                        minLength: number;
                    };
                    type: {
                        type: string;
                    };
                    label: {
                        type: string;
                        minLength: number;
                    };
                    required: {
                        type: string;
                    };
                };
            };
            textComponent: {
                allOf: ({
                    $ref: string;
                    type?: undefined;
                    properties?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    properties: {
                        type: {
                            const: string;
                        };
                    };
                    additionalProperties: boolean;
                    $ref?: undefined;
                })[];
            };
            textareaComponent: {
                allOf: ({
                    $ref: string;
                    type?: undefined;
                    properties?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    properties: {
                        type: {
                            const: string;
                        };
                    };
                    additionalProperties: boolean;
                    $ref?: undefined;
                })[];
            };
            numberComponent: {
                allOf: ({
                    $ref: string;
                    type?: undefined;
                    properties?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    properties: {
                        type: {
                            const: string;
                        };
                    };
                    additionalProperties: boolean;
                    $ref?: undefined;
                })[];
            };
            dateComponent: {
                allOf: ({
                    $ref: string;
                    type?: undefined;
                    properties?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    properties: {
                        type: {
                            const: string;
                        };
                    };
                    additionalProperties: boolean;
                    $ref?: undefined;
                })[];
            };
            selectComponent: {
                allOf: ({
                    $ref: string;
                    type?: undefined;
                    required?: undefined;
                    properties?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    required: string[];
                    properties: {
                        type: {
                            const: string;
                        };
                        options: {
                            type: string;
                            minItems: number;
                            items: {
                                type: string;
                                required: string[];
                                properties: {
                                    label: {
                                        type: string;
                                        minLength: number;
                                    };
                                    value: {
                                        type: string;
                                        minLength: number;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                    additionalProperties: boolean;
                    $ref?: undefined;
                })[];
            };
            sliderComponent: {
                allOf: ({
                    $ref: string;
                    type?: undefined;
                    required?: undefined;
                    properties?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    required: string[];
                    properties: {
                        type: {
                            const: string;
                        };
                        min: {
                            type: string;
                        };
                        max: {
                            type: string;
                        };
                        step: {
                            type: string;
                            exclusiveMinimum: number;
                        };
                    };
                    additionalProperties: boolean;
                    $ref?: undefined;
                })[];
            };
            mapPinComponent: {
                allOf: ({
                    $ref: string;
                    type?: undefined;
                    properties?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    properties: {
                        type: {
                            const: string;
                        };
                    };
                    additionalProperties: boolean;
                    $ref?: undefined;
                })[];
            };
            reviewComponent: {
                allOf: ({
                    $ref: string;
                    type?: undefined;
                    properties?: undefined;
                    additionalProperties?: undefined;
                } | {
                    type: string;
                    properties: {
                        type: {
                            const: string;
                        };
                        source: {
                            type: string;
                            minLength: number;
                        };
                    };
                    additionalProperties: boolean;
                    $ref?: undefined;
                })[];
            };
        };
    };
    actionsSchema: {
        $schema: string;
        $id: string;
        title: string;
        type: string;
        required: string[];
        properties: {
            label: {
                type: string;
                minLength: number;
            };
            action: {
                type: string;
                required: string[];
                properties: {
                    type: {
                        type: string;
                        enum: string[];
                    };
                };
                additionalProperties: boolean;
            };
        };
        additionalProperties: boolean;
    };
};

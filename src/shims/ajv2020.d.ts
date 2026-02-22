declare module "ajv/dist/2020.js" {
  export type ErrorObject = {
    instancePath?: string;
    schemaPath?: string;
    keyword?: string;
    params?: Record<string, unknown>;
    message?: string;
  };

  export type ValidateFunction<T = unknown> = {
    (data: unknown): data is T;
    errors?: ErrorObject[] | null;
  };

  export default class Ajv2020 {
    constructor(options?: Record<string, unknown>);
    addSchema(schema: unknown, key?: string): void;
    compile<T = unknown>(schema: unknown): ValidateFunction<T>;
  }
}

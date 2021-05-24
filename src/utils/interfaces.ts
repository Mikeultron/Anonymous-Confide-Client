export interface ILooseObject {
  [key: string]: any;
}

export interface IPayload {
  path?: string;
  params?: { [x: string]: any };
  url?: string;
  type?: string;
  headers?: {};
  body?: {};
}

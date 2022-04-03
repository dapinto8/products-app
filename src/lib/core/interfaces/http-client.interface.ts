export type RequestHeaders = Record<string, string | number | boolean>;

export interface RequestConfig {
  headers?: RequestHeaders;
  params?: any;
}

export interface Response<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: RequestConfig;
  request?: any;
}

export interface HttpClient {
  get(url: string, config?: RequestConfig): Promise<Response>;
  // post(url: string, data: any): Promise<AxiosResponse>;
  // put(url: string, data: any): Promise<AxiosResponse>;
  // patch(url: string, data: any): Promise<AxiosResponse>;
  // delete(url: string): Promise<AxiosResponse>;
  // options(url: string): Promise<AxiosResponse>;
}

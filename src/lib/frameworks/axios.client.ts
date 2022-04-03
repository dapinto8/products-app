import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpClient } from '@core/interfaces/http-client.interface';

export class AxiosClient implements HttpClient {
  private instance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.get(url, config);
  }
}

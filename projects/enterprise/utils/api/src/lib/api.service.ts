import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export const IDomainURLService = new InjectionToken<string>('domain');

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private readonly httpclient: HttpClient,
    @Inject(IDomainURLService) private readonly domainURL: string) { }

  request<T>(method: 'post' | 'get' | 'put' | 'delete', url: string, options: {
    body?: any;
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  },         isAuth: boolean): Observable<T> {
    if (isAuth) {
      // set header
    }
    const actualURL = `${this.domainURL}/${url}`;
    return this.httpclient.request(method, actualURL, options) as Observable<T>;
  }
}

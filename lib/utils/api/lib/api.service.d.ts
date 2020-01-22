import { InjectionToken } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare const IDomainURLService: InjectionToken<string>;
export declare class ApiService {
    private readonly httpclient;
    private readonly domainURL;
    constructor(httpclient: HttpClient, domainURL: string);
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
    }, isAuth: boolean): Observable<T>;
}

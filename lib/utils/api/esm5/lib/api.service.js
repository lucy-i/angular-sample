/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/** @type {?} */
export var IDomainURLService = new InjectionToken('domain');
var ApiService = /** @class */ (function () {
    function ApiService(httpclient, domainURL) {
        this.httpclient = httpclient;
        this.domainURL = domainURL;
    }
    /**
     * @template T
     * @param {?} method
     * @param {?} url
     * @param {?} options
     * @param {?} isAuth
     * @return {?}
     */
    ApiService.prototype.request = /**
     * @template T
     * @param {?} method
     * @param {?} url
     * @param {?} options
     * @param {?} isAuth
     * @return {?}
     */
    function (method, url, options, isAuth) {
        if (isAuth) {
            // set header
        }
        /** @type {?} */
        var actualURL = this.domainURL + "/" + url;
        return (/** @type {?} */ (this.httpclient.request(method, actualURL, options)));
    };
    ApiService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Inject, args: [IDomainURLService,] }] }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(IDomainURLService)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());
export { ApiService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.httpclient;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.domainURL;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZW50ZXJwcmlzZS91dGlscy9hcGkvIiwic291cmNlcyI6WyJsaWIvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBMkIsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUczRSxNQUFNLEtBQU8saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQVMsUUFBUSxDQUFDO0FBRXJFO0lBRUUsb0JBQ21CLFVBQXNCLEVBQ0ssU0FBaUI7UUFENUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNLLGNBQVMsR0FBVCxTQUFTLENBQVE7SUFBSSxDQUFDOzs7Ozs7Ozs7SUFFcEUsNEJBQU87Ozs7Ozs7O0lBQVAsVUFBVyxNQUF5QyxFQUFFLEdBQVcsRUFBRSxPQVlsRSxFQUFVLE1BQWU7UUFDeEIsSUFBSSxNQUFNLEVBQUU7WUFDVixhQUFhO1NBQ2Q7O1lBQ0ssU0FBUyxHQUFNLElBQUksQ0FBQyxTQUFTLFNBQUksR0FBSztRQUM1QyxPQUFPLG1CQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQWlCLENBQUM7SUFDOUUsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLFVBQVU7NkNBU2QsTUFBTSxTQUFDLGlCQUFpQjs7O3FCQVY3QjtDQStCQyxBQXpCRCxJQXlCQztTQXhCWSxVQUFVOzs7Ozs7SUFFbkIsZ0NBQXVDOzs7OztJQUN2QywrQkFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IElEb21haW5VUkxTZXJ2aWNlID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2RvbWFpbicpO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGh0dHBjbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdChJRG9tYWluVVJMU2VydmljZSkgcHJpdmF0ZSByZWFkb25seSBkb21haW5VUkw6IHN0cmluZykgeyB9XG5cbiAgcmVxdWVzdDxUPihtZXRob2Q6ICdwb3N0JyB8ICdnZXQnIHwgJ3B1dCcgfCAnZGVsZXRlJywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IHtcbiAgICBib2R5PzogYW55O1xuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcbiAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIH07XG4gICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICBwYXJhbXM/OiBIdHRwUGFyYW1zIHwge1xuICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9O1xuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgfSwgICAgICAgICBpc0F1dGg6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAoaXNBdXRoKSB7XG4gICAgICAvLyBzZXQgaGVhZGVyXG4gICAgfVxuICAgIGNvbnN0IGFjdHVhbFVSTCA9IGAke3RoaXMuZG9tYWluVVJMfS8ke3VybH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHBjbGllbnQucmVxdWVzdChtZXRob2QsIGFjdHVhbFVSTCwgb3B0aW9ucykgYXMgT2JzZXJ2YWJsZTxUPjtcbiAgfVxufVxuIl19
import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var IDomainURLService = new InjectionToken('domain');
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
    /** @nocollapse */ ApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(HttpClient), ɵɵinject(IDomainURLService)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiComponent = /** @class */ (function () {
    function ApiComponent() {
    }
    /**
     * @return {?}
     */
    ApiComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ApiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-api',
                    template: "\n    <p>\n      api works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ApiComponent.ctorParameters = function () { return []; };
    return ApiComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    /**
     * @param {?} domainurl
     * @return {?}
     */
    ApiModule.forRoot = /**
     * @param {?} domainurl
     * @return {?}
     */
    function (domainurl) {
        return {
            ngModule: ApiModule,
            providers: [ApiService,
                {
                    provide: IDomainURLService,
                    useValue: domainurl
                }]
        };
    };
    ApiModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ApiComponent],
                    imports: [],
                    exports: [ApiComponent]
                },] }
    ];
    return ApiModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: enterprise-utils-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ApiComponent, ApiModule, ApiService, IDomainURLService };
//# sourceMappingURL=enterprise-utils-api.js.map

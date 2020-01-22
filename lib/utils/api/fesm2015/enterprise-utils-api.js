import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const IDomainURLService = new InjectionToken('domain');
class ApiService {
    /**
     * @param {?} httpclient
     * @param {?} domainURL
     */
    constructor(httpclient, domainURL) {
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
    request(method, url, options, isAuth) {
        if (isAuth) {
            // set header
        }
        /** @type {?} */
        const actualURL = `${this.domainURL}/${url}`;
        return (/** @type {?} */ (this.httpclient.request(method, actualURL, options)));
    }
}
ApiService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: [IDomainURLService,] }] }
];
/** @nocollapse */ ApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(HttpClient), ɵɵinject(IDomainURLService)); }, token: ApiService, providedIn: "root" });
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
class ApiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ApiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-api',
                template: `
    <p>
      api works!
    </p>
  `
            }] }
];
/** @nocollapse */
ApiComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiModule {
    /**
     * @param {?} domainurl
     * @return {?}
     */
    static forRoot(domainurl) {
        return {
            ngModule: ApiModule,
            providers: [ApiService,
                {
                    provide: IDomainURLService,
                    useValue: domainurl
                }]
        };
    }
}
ApiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ApiComponent],
                imports: [],
                exports: [ApiComponent]
            },] }
];

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

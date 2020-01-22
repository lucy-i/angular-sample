(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@enterprise/utils/api', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = global || self, factory((global.enterprise = global.enterprise || {}, global.enterprise.utils = global.enterprise.utils || {}, global.enterprise.utils.api = {}), global.ng.core, global.ng.common.http));
}(this, (function (exports, core, http) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/api.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var IDomainURLService = new core.InjectionToken('domain');
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: String, decorators: [{ type: core.Inject, args: [IDomainURLService,] }] }
        ]; };
        /** @nocollapse */ ApiService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(IDomainURLService)); }, token: ApiService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [ApiComponent],
                        imports: [],
                        exports: [ApiComponent]
                    },] }
        ];
        return ApiModule;
    }());

    exports.ApiComponent = ApiComponent;
    exports.ApiModule = ApiModule;
    exports.ApiService = ApiService;
    exports.IDomainURLService = IDomainURLService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=enterprise-utils-api.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@modules/pricing', ['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
    (global = global || self, factory((global.modules = global.modules || {}, global.modules.pricing = {}), global.ng.core, global.ng.router, global.ng.common));
}(this, (function (exports, core, router, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pricing.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PricingComponent = /** @class */ (function () {
        function PricingComponent() {
        }
        /**
         * @return {?}
         */
        PricingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        PricingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-pricing',
                        template: "\n    <p>\n      pricing works!\n      <router-outlet></router-outlet>\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        PricingComponent.ctorParameters = function () { return []; };
        return PricingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/customer/customer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomerComponent = /** @class */ (function () {
        function CustomerComponent() {
        }
        /**
         * @return {?}
         */
        CustomerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        CustomerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-customer',
                        template: "Customer Loading...!"
                    }] }
        ];
        /** @nocollapse */
        CustomerComponent.ctorParameters = function () { return []; };
        return CustomerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pricing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PricingModule = /** @class */ (function () {
        function PricingModule() {
        }
        PricingModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PricingComponent, CustomerComponent],
                        imports: [
                            common.CommonModule,
                            router.RouterModule
                        ],
                        exports: [PricingComponent, CustomerComponent]
                    },] }
        ];
        return PricingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pricing-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [{
            path: '', component: PricingComponent,
            children: [{
                    path: 'customer',
                    component: CustomerComponent
                },
                {
                    path: '',
                    redirectTo: 'customer',
                    pathMatch: 'prefix'
                }],
        }, {
            path: '**',
            redirectTo: 'customer',
            pathMatch: 'prefix'
        }];
    var PricingRoutingModule = /** @class */ (function () {
        function PricingRoutingModule() {
        }
        PricingRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [PricingModule, router.RouterModule.forChild(routes)],
                        exports: [],
                        declarations: [],
                    },] }
        ];
        return PricingRoutingModule;
    }());

    exports.PricingRoutingModule = PricingRoutingModule;
    exports.ɵa = PricingModule;
    exports.ɵb = PricingComponent;
    exports.ɵc = CustomerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=modules-pricing.umd.js.map

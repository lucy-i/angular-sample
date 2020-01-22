import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [PricingComponent, CustomerComponent],
                    imports: [
                        CommonModule,
                        RouterModule
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
        { type: NgModule, args: [{
                    imports: [PricingModule, RouterModule.forChild(routes)],
                    exports: [],
                    declarations: [],
                },] }
    ];
    return PricingRoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: modules-pricing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PricingRoutingModule, PricingModule as ɵa, PricingComponent as ɵb, CustomerComponent as ɵc };
//# sourceMappingURL=modules-pricing.js.map

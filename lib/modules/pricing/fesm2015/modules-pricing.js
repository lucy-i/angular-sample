import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pricing.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PricingComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PricingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pricing',
                template: `
    <p>
      pricing works!
      <router-outlet></router-outlet>
    </p>
  `
            }] }
];
/** @nocollapse */
PricingComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/customer/customer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CustomerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-customer',
                template: "Customer Loading...!"
            }] }
];
/** @nocollapse */
CustomerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pricing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PricingModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pricing-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [{
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
class PricingRoutingModule {
}
PricingRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [PricingModule, RouterModule.forChild(routes)],
                exports: [],
                declarations: [],
            },] }
];

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

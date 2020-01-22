import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/stock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StockService {
    constructor() { }
}
StockService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StockService.ctorParameters = () => [];
/** @nocollapse */ StockService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StockService_Factory() { return new StockService(); }, token: StockService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/stock.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StockComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
StockComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-stock',
                template: `
    <p>
      stock works!
    </p>
  `
            }] }
];
/** @nocollapse */
StockComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/stock.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StockModule {
}
StockModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StockComponent],
                imports: [],
                exports: [StockComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: module-stock.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StockComponent, StockModule, StockService };
//# sourceMappingURL=module-stock.js.map

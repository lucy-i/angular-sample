import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/stock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StockService = /** @class */ (function () {
    function StockService() {
    }
    StockService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StockService.ctorParameters = function () { return []; };
    /** @nocollapse */ StockService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StockService_Factory() { return new StockService(); }, token: StockService, providedIn: "root" });
    return StockService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/stock.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StockComponent = /** @class */ (function () {
    function StockComponent() {
    }
    /**
     * @return {?}
     */
    StockComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    StockComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-stock',
                    template: "\n    <p>\n      stock works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    StockComponent.ctorParameters = function () { return []; };
    return StockComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/stock.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StockModule = /** @class */ (function () {
    function StockModule() {
    }
    StockModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StockComponent],
                    imports: [],
                    exports: [StockComponent]
                },] }
    ];
    return StockModule;
}());

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

import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validator.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidatorService = /** @class */ (function () {
    function ValidatorService() {
    }
    ValidatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ValidatorService.ctorParameters = function () { return []; };
    /** @nocollapse */ ValidatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValidatorService_Factory() { return new ValidatorService(); }, token: ValidatorService, providedIn: "root" });
    return ValidatorService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidatorComponent = /** @class */ (function () {
    function ValidatorComponent() {
    }
    /**
     * @return {?}
     */
    ValidatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ValidatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-validator',
                    template: "\n    <p>\n      validator works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ValidatorComponent.ctorParameters = function () { return []; };
    return ValidatorComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validator.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidatorModule = /** @class */ (function () {
    function ValidatorModule() {
    }
    ValidatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ValidatorComponent],
                    imports: [],
                    exports: [ValidatorComponent]
                },] }
    ];
    return ValidatorModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: enterprise-utils-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ValidatorComponent, ValidatorModule, ValidatorService };
//# sourceMappingURL=enterprise-utils-validator.js.map

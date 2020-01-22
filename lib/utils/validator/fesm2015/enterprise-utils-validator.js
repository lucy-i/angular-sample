import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validator.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorService {
    constructor() { }
}
ValidatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ValidatorService.ctorParameters = () => [];
/** @nocollapse */ ValidatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ValidatorService_Factory() { return new ValidatorService(); }, token: ValidatorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ValidatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-validator',
                template: `
    <p>
      validator works!
    </p>
  `
            }] }
];
/** @nocollapse */
ValidatorComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/validator.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorModule {
}
ValidatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ValidatorComponent],
                imports: [],
                exports: [ValidatorComponent]
            },] }
];

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

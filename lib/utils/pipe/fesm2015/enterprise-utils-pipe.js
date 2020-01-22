import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipe.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipeService {
    constructor() { }
}
PipeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PipeService.ctorParameters = () => [];
/** @nocollapse */ PipeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PipeService_Factory() { return new PipeService(); }, token: PipeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipe.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PipeComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pipe',
                template: `
    <p>
      pipe works!
    </p>
  `
            }] }
];
/** @nocollapse */
PipeComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipeModule {
}
PipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PipeComponent],
                imports: [],
                exports: [PipeComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: enterprise-utils-pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PipeComponent, PipeModule, PipeService };
//# sourceMappingURL=enterprise-utils-pipe.js.map

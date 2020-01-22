import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipe.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipeService = /** @class */ (function () {
    function PipeService() {
    }
    PipeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PipeService.ctorParameters = function () { return []; };
    /** @nocollapse */ PipeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PipeService_Factory() { return new PipeService(); }, token: PipeService, providedIn: "root" });
    return PipeService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipe.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipeComponent = /** @class */ (function () {
    function PipeComponent() {
    }
    /**
     * @return {?}
     */
    PipeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PipeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-pipe',
                    template: "\n    <p>\n      pipe works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    PipeComponent.ctorParameters = function () { return []; };
    return PipeComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PipeComponent],
                    imports: [],
                    exports: [PipeComponent]
                },] }
    ];
    return PipeModule;
}());

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

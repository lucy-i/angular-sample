(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@enterprise/utils/validator', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.enterprise = global.enterprise || {}, global.enterprise.utils = global.enterprise.utils || {}, global.enterprise.utils.validator = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/validator.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ValidatorService = /** @class */ (function () {
        function ValidatorService() {
        }
        ValidatorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ValidatorService.ctorParameters = function () { return []; };
        /** @nocollapse */ ValidatorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ValidatorService_Factory() { return new ValidatorService(); }, token: ValidatorService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [ValidatorComponent],
                        imports: [],
                        exports: [ValidatorComponent]
                    },] }
        ];
        return ValidatorModule;
    }());

    exports.ValidatorComponent = ValidatorComponent;
    exports.ValidatorModule = ValidatorModule;
    exports.ValidatorService = ValidatorService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=enterprise-utils-validator.umd.js.map

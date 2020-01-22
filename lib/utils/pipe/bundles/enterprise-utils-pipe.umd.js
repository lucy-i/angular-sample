(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@enterprise/utils/pipe', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.enterprise = global.enterprise || {}, global.enterprise.utils = global.enterprise.utils || {}, global.enterprise.utils.pipe = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pipe.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PipeService = /** @class */ (function () {
        function PipeService() {
        }
        PipeService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PipeService.ctorParameters = function () { return []; };
        /** @nocollapse */ PipeService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PipeService_Factory() { return new PipeService(); }, token: PipeService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [PipeComponent],
                        imports: [],
                        exports: [PipeComponent]
                    },] }
        ];
        return PipeModule;
    }());

    exports.PipeComponent = PipeComponent;
    exports.PipeModule = PipeModule;
    exports.PipeService = PipeService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=enterprise-utils-pipe.umd.js.map

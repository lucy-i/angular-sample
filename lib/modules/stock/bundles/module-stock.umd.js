(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@module/stock', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.module = global.module || {}, global.module.stock = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/stock.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StockService = /** @class */ (function () {
        function StockService() {
        }
        StockService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        StockService.ctorParameters = function () { return []; };
        /** @nocollapse */ StockService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function StockService_Factory() { return new StockService(); }, token: StockService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [StockComponent],
                        imports: [],
                        exports: [StockComponent]
                    },] }
        ];
        return StockModule;
    }());

    exports.StockComponent = StockComponent;
    exports.StockModule = StockModule;
    exports.StockService = StockService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=module-stock.umd.js.map

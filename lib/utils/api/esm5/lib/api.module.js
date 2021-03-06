/**
 * @fileoverview added by tsickle
 * Generated from: lib/api.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ApiComponent } from './api.component';
import { ApiService, IDomainURLService } from './api.service';
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    /**
     * @param {?} domainurl
     * @return {?}
     */
    ApiModule.forRoot = /**
     * @param {?} domainurl
     * @return {?}
     */
    function (domainurl) {
        return {
            ngModule: ApiModule,
            providers: [ApiService,
                {
                    provide: IDomainURLService,
                    useValue: domainurl
                }]
        };
    };
    ApiModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ApiComponent],
                    imports: [],
                    exports: [ApiComponent]
                },] }
    ];
    return ApiModule;
}());
export { ApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BlbnRlcnByaXNlL3V0aWxzL2FwaS8iLCJzb3VyY2VzIjpbImxpYi9hcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJOUQ7SUFBQTtJQWlCQSxDQUFDOzs7OztJQVZRLGlCQUFPOzs7O0lBQWQsVUFBZSxTQUFpQjtRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsVUFBVTtnQkFDcEI7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCLENBQUM7U0FDTCxDQUFDO0lBQ0osQ0FBQzs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBWUQsZ0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVhZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpQ29tcG9uZW50IH0gZnJvbSAnLi9hcGkuY29tcG9uZW50JztcbmltcG9ydCB7IEFwaVNlcnZpY2UsIElEb21haW5VUkxTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcGlDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtBcGlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGRvbWFpbnVybDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBcGlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSURvbWFpblVSTFNlcnZpY2UsXG4gICAgICAgICAgdXNlVmFsdWU6IGRvbWFpbnVybFxuICAgICAgICB9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
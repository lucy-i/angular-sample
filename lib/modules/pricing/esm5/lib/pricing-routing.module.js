/**
 * @fileoverview added by tsickle
 * Generated from: lib/pricing-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PricingComponent } from './pricing.component';
import { CustomerComponent } from './customer/customer.component';
import { PricingModule } from './pricing.module';
/** @type {?} */
var routes = [{
        path: '', component: PricingComponent,
        children: [{
                path: 'customer',
                component: CustomerComponent
            },
            {
                path: '',
                redirectTo: 'customer',
                pathMatch: 'prefix'
            }],
    }, {
        path: '**',
        redirectTo: 'customer',
        pathMatch: 'prefix'
    }];
var PricingRoutingModule = /** @class */ (function () {
    function PricingRoutingModule() {
    }
    PricingRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [PricingModule, RouterModule.forChild(routes)],
                    exports: [],
                    declarations: [],
                },] }
    ];
    return PricingRoutingModule;
}());
export { PricingRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2luZy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Btb2R1bGVzL3ByaWNpbmcvIiwic291cmNlcyI6WyJsaWIvcHJpY2luZy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFM0MsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCO1FBQ3JDLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFNBQVMsRUFBRSxRQUFRO2FBQ3BCLENBQUM7S0FDSCxFQUFFO1FBQ0QsSUFBSSxFQUFFLElBQUk7UUFDVixVQUFVLEVBQUUsVUFBVTtRQUN0QixTQUFTLEVBQUUsUUFBUTtLQUNwQixDQUFDO0FBRUY7SUFBQTtJQUtvQyxDQUFDOztnQkFMcEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN2RCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsRUFBRTtpQkFDakI7O0lBQ21DLDJCQUFDO0NBQUEsQUFMckMsSUFLcUM7U0FBeEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByaWNpbmdDb21wb25lbnQgfSBmcm9tICcuL3ByaWNpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpY2luZ01vZHVsZSB9IGZyb20gJy4vcHJpY2luZy5tb2R1bGUnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFt7XG4gIHBhdGg6ICcnLCBjb21wb25lbnQ6IFByaWNpbmdDb21wb25lbnQsXG4gIGNoaWxkcmVuOiBbe1xuICAgIHBhdGg6ICdjdXN0b21lcicsXG4gICAgY29tcG9uZW50OiBDdXN0b21lckNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJ2N1c3RvbWVyJyxcbiAgICBwYXRoTWF0Y2g6ICdwcmVmaXgnXG4gIH1dLFxufSwge1xuICBwYXRoOiAnKionLFxuICByZWRpcmVjdFRvOiAnY3VzdG9tZXInLFxuICBwYXRoTWF0Y2g6ICdwcmVmaXgnXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1ByaWNpbmdNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFByaWNpbmdSb3V0aW5nTW9kdWxlIHsgfVxuIl19
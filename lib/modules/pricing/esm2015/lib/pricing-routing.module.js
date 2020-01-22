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
const routes = [{
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
export class PricingRoutingModule {
}
PricingRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [PricingModule, RouterModule.forChild(routes)],
                exports: [],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2luZy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Btb2R1bGVzL3ByaWNpbmcvIiwic291cmNlcyI6WyJsaWIvcHJpY2luZy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7TUFFM0MsTUFBTSxHQUFXLENBQUM7UUFDdEIsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCO1FBQ3JDLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFNBQVMsRUFBRSxRQUFRO2FBQ3BCLENBQUM7S0FDSCxFQUFFO1FBQ0QsSUFBSSxFQUFFLElBQUk7UUFDVixVQUFVLEVBQUUsVUFBVTtRQUN0QixTQUFTLEVBQUUsUUFBUTtLQUNwQixDQUFDO0FBT0YsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTGhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLEVBQUU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJpY2luZ0NvbXBvbmVudCB9IGZyb20gJy4vcHJpY2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tZXJDb21wb25lbnQgfSBmcm9tICcuL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmljaW5nTW9kdWxlIH0gZnJvbSAnLi9wcmljaW5nLm1vZHVsZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJycsIGNvbXBvbmVudDogUHJpY2luZ0NvbXBvbmVudCxcbiAgY2hpbGRyZW46IFt7XG4gICAgcGF0aDogJ2N1c3RvbWVyJyxcbiAgICBjb21wb25lbnQ6IEN1c3RvbWVyQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICByZWRpcmVjdFRvOiAnY3VzdG9tZXInLFxuICAgIHBhdGhNYXRjaDogJ3ByZWZpeCdcbiAgfV0sXG59LCB7XG4gIHBhdGg6ICcqKicsXG4gIHJlZGlyZWN0VG86ICdjdXN0b21lcicsXG4gIHBhdGhNYXRjaDogJ3ByZWZpeCdcbn1dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUHJpY2luZ01vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpY2luZ1JvdXRpbmdNb2R1bGUgeyB9XG4iXX0=
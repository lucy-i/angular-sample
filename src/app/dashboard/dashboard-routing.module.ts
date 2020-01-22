import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { DashboardComponent } from './dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { StockComponent } from './stock/stock.component';


const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: 'summary',
            component: SummaryComponent
        },
        {
            path: 'stock',
            component: StockComponent
        },
        {
            path: 'price',
            loadChildren: () => import('@modules/pricing').then(t => t.PricingRoutingModule)
        },
        {
            path: '',
            redirectTo: '/summary',
            pathMatch: 'prefix'
        }
    ]
}, {
    path: '**',
    redirectTo: '/summary',
    pathMatch: 'prefix'
}];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { SummaryComponent } from './summary/summary.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { DashboardService } from './dashboard.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [DashboardComponent, SummaryComponent, StockComponent],
    declarations: [DashboardComponent, SummaryComponent, StockComponent],
    providers: [DashboardService],
})
export class DashboardModule { }

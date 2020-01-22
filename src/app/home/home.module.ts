import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }

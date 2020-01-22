import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth.module';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('../dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
            }, {
                path: '',
                redirectTo: '/app/dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/app/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class AuthRoutingModule { }

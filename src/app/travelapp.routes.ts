import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AccountsPageComponent} from './accounts-page/accounts-page.component';
import {SignUpComponentComponent} from './accounts-page/sign-up-component/sign-up-component.component';

export const routes: Routes = [
    {path: '', data: {signUp: 'before'}, children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'sign-up', component: SignUpComponentComponent},
        ]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });

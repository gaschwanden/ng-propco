import { Routes, RouterModule } from '@angular/router';

import { ReitComponent } from './app-reit/reit.component';
import { LoginComponent } from './app-login/login.component';
import { RegisterComponent } from './app-register/register.component';
import { AuthGuard } from './_guard/auth.guard';
import { AddReitComponent } from './app-reit/app-add-reit/add-reit.component';
import { AssetComponent } from './app-asset/asset.component';
import { AddAssetComponent } from './app-asset/app-add-asset/add-asset.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/reit/all', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'reit/all', component: ReitComponent, canActivate: [AuthGuard] },
    { path: 'reit/add', component: AddReitComponent, canActivate: [AuthGuard] },

    { path: 'asset/all', component: AssetComponent, canActivate: [AuthGuard] },
    { path: 'asset/add', component: AddAssetComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
);

import { Routes, RouterModule } from '@angular/router';

import { ReitComponent } from './reit/reit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guard/auth.guard';
import { AddReitComponent } from './add-reit/add-reit.component';
import { AssetComponent } from './asset/asset.component';
import { AddAssetComponent } from './add-asset/add-asset.component';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/reit/all', pathMatch: 'full' },

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

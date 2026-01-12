import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Root } from './pages/root/root';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { LandingPage } from './pages/landing-page/landing-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', component: LandingPage, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
        path: 'home-cloud',
        component: Home,
        canActivate: [authGuard],
        children: [
            { path: 'home', component: Root }]
    }
];
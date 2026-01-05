import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Root } from './pages/root/root';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
        path: 'home-cloud',
        component: Home,
        children: [
            { path: 'root', component: Root }
        ]
    }
];
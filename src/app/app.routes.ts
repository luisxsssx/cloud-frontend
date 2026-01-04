import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Root } from './pages/root/root';

export const routes: Routes = [
    {
        path: 'home-cloud',
        component: Home,
        children: [
            { path: 'root', component: Root }
        ]
    }
];
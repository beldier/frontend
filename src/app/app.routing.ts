import { Link2Component } from './link2/link2.component';
import { Link1Component } from './link1/link1.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'link1', component: Link1Component },
    { path: 'link2', component: Link2Component },

];
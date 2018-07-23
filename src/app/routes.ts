import {Routes} from '@angular/router';
import { FirstComponent } from './components/first/first.components';
import { SecondComponent } from './components/second/second.components';

export const appRoutes: Routes = [
    {
        path: 'first',
        component: FirstComponent
    },
    {
        path: 'second',
        component: SecondComponent
    }
]
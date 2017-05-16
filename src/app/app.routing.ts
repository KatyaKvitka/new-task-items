import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ItemsComponent} from './components/items.component';

const appRoutes: Routes = [
	{
		path:'',
		component: ItemsComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
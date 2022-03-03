import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('login/LoginModule').then(m => m.LoginModule),
	},
	// {
	// 	path: 'welcome',
	// 	loadChildren: () => import('login/WelcomeModule').then(m => m.WelcomeModule)
	// },
	{ 
		path: '*',
		component: AppComponent
	}
]
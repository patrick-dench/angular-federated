import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
		//loadChildren: () => import('./login/login.component').then(m => m.LoginComponent),
	}
]
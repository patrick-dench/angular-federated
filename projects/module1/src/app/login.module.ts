import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { routes } from "./login.routes";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	], 
	declarations: [
		LoginComponent,
	],
})
export class LoginModule {}
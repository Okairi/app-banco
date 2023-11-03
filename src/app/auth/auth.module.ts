import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthPageComponent } from './page/auth-page/auth-page.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthPageComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}

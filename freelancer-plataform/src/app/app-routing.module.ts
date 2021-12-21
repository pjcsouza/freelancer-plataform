import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path:'', component:HomePageComponent
  },
  {
    path: 'login', component:LoginPageComponent
  },
  {
    path:'register', component:RegisterPageComponent
  },
  {
    path:'new-service', component:NewServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

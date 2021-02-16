import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helpers/auth.guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'users', component: UserComponent , canActivate: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

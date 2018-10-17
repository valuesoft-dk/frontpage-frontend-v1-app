import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdalGuard } from 'adal-angular4';
import { HomeComponent } from '../home/home.component';
import { ProtectedComponent } from '../protected/protected.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthCallbackComponent } from '../auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardService]},
  { path: 'auth-callback', component: AuthCallbackComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

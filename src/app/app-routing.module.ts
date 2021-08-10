import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from './auth/app.auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserViewComponent} from './user-view/user-view.component';
import {PermissionDeniedComponent} from './permission-denied/permission-denied.component';
import {AdminViewComponent} from './admin-view/admin-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AppAuthGuard],
    children: [
      {
        path: 'admin',
        component: AdminViewComponent,
        data: {
          roles: ['ADMIN_USER']
        },
        canActivate: [AppAuthGuard]
      },
      {
        path: 'user',
        component: UserViewComponent,
        canActivate: [AppAuthGuard]
      },
      {
        path: 'permission-denied',
        component: PermissionDeniedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {UserViewComponent} from './user-view/user-view.component';
import {PermissionDeniedComponent} from './permission-denied/permission-denied.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        component: AdminViewComponent,
      },
      {
        path: 'user',
        component: UserViewComponent
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

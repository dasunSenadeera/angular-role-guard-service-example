// import { ViewCustomersComponent } from "./components/view-customers/view-customers.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AdminOnlyComponent } from "./components/admin-only/admin-only.component";
import { ManagerOnlyComponent } from "./components/manager-only/manager-only.component";
import { UserOnlyComponent } from "./components/user-only/user-only.component";
import { EveryoneComponent } from "./components/everyone/everyone.component";
import { AdminOrManagersOnlyComponent } from "./components/admin-or-managers-only/admin-or-managers-only.component";
import { RoleGuardService} from './role-guard.service';

const routes: Routes = [
  {
    path: "admin",
    component: AdminOnlyComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['admin']}
  },
  {
    path: "manager",
    component: ManagerOnlyComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['manager']}
  },
  {
    path: "user",
    component: UserOnlyComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['user']}
  },
  {
    path: "adminormanager",
    component: AdminOrManagersOnlyComponent,
    canActivate: [RoleGuardService],
    data: { roles: ['admin', 'manager']}
  },
  {
    path: "all",
    component: EveryoneComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

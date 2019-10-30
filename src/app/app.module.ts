import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { AdminOnlyComponent } from './components/admin-only/admin-only.component';
import { UserOnlyComponent } from './components/user-only/user-only.component';
import { ManagerOnlyComponent } from './components/manager-only/manager-only.component';
import { EveryoneComponent } from './components/everyone/everyone.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRolesService } from './user-roles.service';
import { RoleGuardService } from './role-guard.service';
import { AdminOrManagersOnlyComponent } from './components/admin-or-managers-only/admin-or-managers-only.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, AdminOnlyComponent, UserOnlyComponent, ManagerOnlyComponent, EveryoneComponent, HomeComponent, NavigationBarComponent, AdminOrManagersOnlyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserRolesService, RoleGuardService]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { UserRolesService} from './user-roles.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private getUserRoles: UserRolesService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return route.data.roles.some( ai => this.getUserRoles.getRoles().includes(ai) );
  }

}
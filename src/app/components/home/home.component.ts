import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { UserRolesService} from './../../user-roles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  rolesData = [];

  constructor(private formBuilder: FormBuilder, private userRolesService: UserRolesService) {
    this.form = this.formBuilder.group({
      roles: new FormArray([], minSelectedCheckboxes())
    });

    // async orders
    of(this.getRoles()).subscribe(roles => {
      this.rolesData = roles;
      this.addCheckboxes();
    });
  }

  ngOnInit() {
  }

  private addCheckboxes() {
    this.rolesData.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.roles as FormArray).push(control);
    });
    this.userRolesService.setRoles(this.form.value.roles
      .map((v, i) => v ? this.rolesData[i].role : null)
      .filter(v => v !== null));
    console.log(this.userRolesService.getRoles());
  }

  getRoles() {
    return [
      { role: 'admin', name: 'Admin' },
      { role: 'user', name: 'User' },
      { role: 'manager', name: 'Manager' },
      { role: 'all', name: 'Everyone' }
    ];
  }

  submit() {
    const selectedOrderIds = this.form.value.roles
      .map((v, i) => v ? this.rolesData[i].role : null)
      .filter(v => v !== null);
    this.userRolesService.setRoles(this.form.value.roles
      .map((v, i) => v ? this.rolesData[i].role : null)
      .filter(v => v !== null));
    console.log(this.userRolesService.getRoles());
  }
}


function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value)
      .reduce((prev, next) => next ? prev + next : prev, 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
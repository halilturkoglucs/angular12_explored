import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, Form,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-form-reactive',
  templateUrl: './user-form-reactive.component.html',
  styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnInit {

  genders = ['female', 'male'];
  forbiddenUsernames = ['ali','ahmet']
  forbiddenEmails = ['admin@admin.com']

  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,
          [Validators.required, this.forbiddenNames().bind(this)], [this.forbiddenNamesAsync.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email, this.forbiddenEmail.bind(this)])
      }),
      'gender': new FormControl('male', [], [this.checkGender]),
      'hobbies': new FormArray([])
    });

    this.userForm.valueChanges.subscribe((value) => {
      // console.log(value);
    });

    this.userForm.statusChanges.subscribe((status) => { // the validity of the whole form, you can subscribe to individual components
      // console.log(status);
    });

    // this.userForm.setValue({
    //   'userData': {
    //     'username': '',
    //     'email': 'default@email.com'
    //   },
    //   'gender': '',
    //   'hobbies': []
    // });

    this.userForm.patchValue({
      'userData': {
        'email': 'default@email.com'
      }
    });
  }

  onSubmit() {
    console.log(this.userForm);
    this.userForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    (<FormArray>this.userForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.userForm.get('hobbies') as FormArray).controls;
  }

  forbiddenEmail(control: FormControl): {[s: string] : boolean} | null {
    // console.log(control.value);
    return this.forbiddenEmails.indexOf(control.value) !== -1 ? {'emailIsForbidden' : true} : null;
  }

  forbiddenNames(): ValidatorFn { // async
    return (control: AbstractControl): ValidationErrors | null => {
      // console.log(control.value);
      return this.forbiddenUsernames.indexOf(control.value) !== -1 ? {'nameIsForbidden' : true} : null;
    };
  }

  forbiddenNamesAsync(control: FormControl): Observable<any> | Promise<any> { // async
    return new Promise<any>(((resolve, reject) => {
      // console.log(control.value);
      setTimeout(() => {
        return this.forbiddenUsernames.indexOf(control.value) !== -1 ? resolve({'nameIsForbiddenAsync' : true}) : resolve(null);
      }, 1500);
    }));
  }

  checkGender(control: FormControl): Observable<any> | Promise<any> { // async
    return new Promise<any>(((resolve, reject) => {
      // console.log(control.value);
      setTimeout(() => {
        return "female" === control.value ? resolve(null) : resolve({'genderIsInvalid': false});
      }, 1500);
    }));
  }
}

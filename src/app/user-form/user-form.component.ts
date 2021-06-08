import {Component, ElementRef, ViewChild} from "@angular/core";
import {NgForm, NgModelGroup} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  // encapsulation: ViewEncapsulation.None
  providers: []
})
export class UserFormComponent {

  @ViewChild('userForm') form: NgForm;
  @ViewChild('userData') userData: NgModelGroup;

  secretChoice = 'pet';
  genders = ['female', 'male'];

  constructor() {
  }

  suggestUsername() {
    const suggestedName = 'SuperUser';
    // this.form.setValue(Object.assign({ // complete replacement
    //   userData: {
    //     username: suggestedName
    //   },
    //   gender: 'male'
    // }, this.form.value));

    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmitWithForm(form: NgForm) {
    console.log(this.form);
    console.log(this.userData);
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.userData);

    this.form.reset({
      userData: {
        username: 'Reset Form!'
      }
    });
  }
}

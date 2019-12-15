import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  // Template variables
  public signUpForm: FormGroup;

  constructor() {
    this.initializeSignUpForm();
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    console.log(this.signUpForm.valid);
  }

  private initializeSignUpForm(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl(''),
      birthday: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      termsAndConditions: new FormControl(false, Validators.required)
    });
  }

}

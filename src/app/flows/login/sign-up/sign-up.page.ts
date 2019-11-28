import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  private initializeSignUpForm(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gender: new FormControl(''),
      birthday: new FormControl(''),
      emailAddress: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

}

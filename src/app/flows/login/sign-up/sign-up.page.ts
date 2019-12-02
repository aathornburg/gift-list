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

  ionViewDidEnter() {
    const ionSelect: HTMLIonSelectElement = document.querySelector('ion-select');
    console.log(ionSelect);
    console.log(ionSelect.shadowRoot.children);
    console.log(ionSelect.shadowRoot.querySelector('.select-icon'));

    const ionSelects: NodeListOf<HTMLIonSelectElement> = document.querySelectorAll('ion-select');
    // console.log(ionSelects);
    ionSelects.forEach((ionSelectElement: Element) => {
      console.log(ionSelectElement.shadowRoot.querySelectorAll('.select-icon'));
    });
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

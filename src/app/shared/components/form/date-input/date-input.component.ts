import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, NgControl } from '@angular/forms';
import { moveUpShrink } from '../form.animations';
import { BaseInputDirective } from '../base-input/base-input.directive';

@Component({
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  animations: [
    moveUpShrink
  ],
  host: { 'class': '__form-input-host' }
})
export class DateInputComponent extends BaseInputDirective {

  // Template variables
  public inputControl: FormControl = new FormControl('');

  constructor(control: NgControl) {
    super(control);
  }

}

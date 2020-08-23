import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, NgControl } from '@angular/forms';
import { moveUpShrinkColorChange } from '../form.animations';
import { BaseInputDirective } from '../base-input/base-input.directive';

@Component({
  selector: 'select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  animations: [
    moveUpShrinkColorChange
  ],
  host: { 'class': '__form-input-host' }
})

export class SelectInputComponent extends BaseInputDirective {

  // Template variables
  public inputControl: FormControl = new FormControl(false);

  constructor(control: NgControl) {
    super(control);
  }

}

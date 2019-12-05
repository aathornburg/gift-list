import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { moveUpShrink } from '../form.animations';
import { BaseInputDirective } from '../base-input/base-input.directive';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextInputComponent,
    multi: true
  }],
  animations: [
    moveUpShrink
  ],
  host: { 'class': '__form-input-host' }
})
export class TextInputComponent extends BaseInputDirective {

  // Default input attributes
  @Input()
  public autocapitalize: string;

  @Input()
  public type: string;

  // Template variables
  public inputControl: FormControl = new FormControl('');

  constructor() {
    super();
  }

}

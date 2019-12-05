import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, ControlValueAccessor } from '@angular/forms';
import { moveUpShrink } from '../form.animations';
import { BaseInputDirective } from '../base-input/base-input.directive';

@Component({
  selector: 'select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectInputComponent,
    multi: true
  }],
  animations: [
    moveUpShrink
  ],
  host: { 'class': '__form-input-host' }
})

export class SelectInputComponent extends BaseInputDirective {

  // Template variables
  public inputControl: FormControl = new FormControl(false);

  constructor() {
    super();
  }

}

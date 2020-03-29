import { Component, Input, HostBinding } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { moveUpShrink, borderColorChange } from '../form.animations';
import { BaseInputDirective } from '../base-input/base-input.directive';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  animations: [
    moveUpShrink,
    borderColorChange
  ],
  host: { 'class': '__form-input-host' }
})
export class TextInputComponent extends BaseInputDirective {

  // Animations for the host component
  @HostBinding('@borderColorChange') get borderColorChange() {
    return { value: this.getInputAnimationState() };
  }

  // Default input attributes
  @Input()
  public autocapitalize: string;

  @Input()
  public type: string;

  // Template variables
  public inputControl: FormControl = new FormControl('');

  constructor(control: NgControl) {
    super(control);
  }

  public test(): void {
    console.log(this.getInputAnimationState());
    console.log(this.control);
  }

}

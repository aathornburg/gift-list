import { Directive, OnInit, Input, HostBinding } from '@angular/core';
import { FormControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { borderColorChange } from '../form.animations';

@Directive({
  selector: '[baseInput]'
})
export class BaseInputDirective implements OnInit, ControlValueAccessor {

  @Input()
  public placeholder: string;

  // Given by Angular so that this component can communicate with the parent form
  private onChange: Function = (text: string) => {};
  public onTouched: Function = () => {};

  // Template variables
  public inputControl: FormControl;

  constructor(protected control: NgControl) {
    this.control.valueAccessor = this;
  }

  ngOnInit() {
    this.wireUpFormControls();
  }

  private wireUpFormControls(): void {
    this.inputControl.valueChanges.subscribe(
      newValue => this.onChange(newValue)
    );
  }

  public getInputAnimationState(): string {
    if (this.control.dirty) {
      if (this.control.value) {
        return this.control.valid ? 'validWithValue' : 'invalidWithValue';
      } else {
        return this.control.valid ? 'validWithoutValue' : 'invalidWithoutValue';
      }
    }
    // return  this.control.value ?
    //           this.control.valid ?
    //           'validWithValue' :
    //           'invalidWithValue'
    //         : 'noValue';
  }

  // ControlValueAccessor methods

  public writeValue(value: boolean): void {
    this.inputControl.setValue(value);
  }

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

}

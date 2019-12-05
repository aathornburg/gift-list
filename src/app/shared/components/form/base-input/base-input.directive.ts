import { Directive, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[baseInput]'
})
export class BaseInputDirective implements OnInit {

  @Input()
  public placeholder: string;

  // Given by Angular so that this component can communicate with the parent form
  private onChange: Function = (text: string) => {};
  public onTouched: Function = () => {};

  // Template variables
  public inputControl: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.wireUpFormControls();
  }

  private wireUpFormControls(): void {
    this.inputControl.valueChanges.subscribe(
      newValue => this.onChange(newValue)
    );
  }

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

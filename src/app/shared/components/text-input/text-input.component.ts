import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextInputComponent,
    multi: true
  }]
})
export class TextInputComponent implements ControlValueAccessor {

  @Input()
  public placeholder: string;

  // Given by Angular so that this component can communicate with the parent form
  private onChange: Function = () => {};
  private onTouched: Function = () => {};

  constructor() { }

  public inputChange(event: any): void {
    console.log(event);
  }

  public writeValue(obj: any): void {
    this.onChange(obj);
  }

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}

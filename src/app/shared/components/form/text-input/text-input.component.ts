import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { moveUpShrink } from '../form.animations';

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
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

  @Input()
  public placeholder: string;

  // Default input attributes
  @Input()
  public autocapitalize: string;

  @Input()
  public type: string;

  // Given by Angular so that this component can communicate with the parent form
  private onChange: Function = (text: string) => {};
  public onTouched: Function = () => {};

  // Template variables
  public textControl: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.wireUpFormControls();
  }

  private wireUpFormControls(): void {
    this.textControl.valueChanges.subscribe(
      newValue => this.onChange(newValue)
    );
  }

  public writeValue(text: string): void {
    this.textControl.setValue(text);
  }

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}
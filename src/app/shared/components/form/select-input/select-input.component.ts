import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, ControlValueAccessor } from '@angular/forms';
import { moveUpShrink } from '../form.animations';

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
  ]
})
export class SelectInputComponent implements OnInit, ControlValueAccessor {

  @Input()
  public placeholder: string;

  // Given by Angular so that this component can communicate with the parent form
  private onChange: Function = (text: string) => {};
  public onTouched: Function = () => {};

  // Template variables
  public selectControl: FormControl = new FormControl(false);

  constructor() {
  }

  ngOnInit() {
    this.wireUpFormControls();
  }

  private wireUpFormControls(): void {
    this.selectControl.valueChanges.subscribe(
      newValue => this.onChange(newValue)
    );
  }

  public writeValue(value: boolean): void {
    this.selectControl.setValue(value);
  }

  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

}

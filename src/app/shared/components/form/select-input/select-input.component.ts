import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, ControlValueAccessor } from '@angular/forms';
import { moveUpShrink, shrinkHeight } from '../form.animations';

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
    moveUpShrink,
    shrinkHeight
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

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    // this.hideIonicSelectArrow();
    this.wireUpFormControls();
  }

  ionViewDidEnter() {
    this.hideIonicSelectArrow();
  }

  private hideIonicSelectArrow(): void {
    const ionSelect: HTMLIonSelectElement = document.querySelector('ion-select');
    console.log(ionSelect);
    console.log(ionSelect.shadowRoot.children);
    const arrowIcon = ionSelect.shadowRoot.querySelector('.select-icon-inner').children;
    console.log(arrowIcon);
    ionSelect.shadowRoot.querySelector('.select-icon-inner').setAttribute('style', 'display: none !important');

    const ionSelects: NodeListOf<HTMLIonSelectElement> = document.querySelectorAll('ion-select');
    // console.log(ionSelects);
    ionSelects.forEach((ionSelectElement: Element) => {
      console.log(ionSelectElement.shadowRoot.querySelectorAll('.select-icon'));
    });
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

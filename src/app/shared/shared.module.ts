import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/form/text-input/text-input.component';
import { SelectInputComponent } from './components/form/select-input/select-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SvgDefsComponent } from './components/svg-defs/svg-defs.component';
import { BaseInputDirective } from './components/form/base-input/base-input.directive';
import { DateInputComponent } from './components/form/date-input/date-input.component';



@NgModule({
  declarations: [
    BaseInputDirective,
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    SvgDefsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    TextInputComponent,
    SelectInputComponent,
    DateInputComponent,
    SvgDefsComponent
  ]
})
export class SharedModule { }

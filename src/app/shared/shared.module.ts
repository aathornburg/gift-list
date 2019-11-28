import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SvgDefsComponent } from './components/svg-defs/svg-defs.component';



@NgModule({
  declarations: [
    TextInputComponent,
    SvgDefsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    TextInputComponent,
    SvgDefsComponent
  ]
})
export class SharedModule { }

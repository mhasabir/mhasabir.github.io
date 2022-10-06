import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { ViewRadioButtonComponent } from './components/view-radio-button/view-radio-button.component';



@NgModule({
  declarations: [
    RadioButtonComponent,
    ViewRadioButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RadioButtonComponent,
    ViewRadioButtonComponent
  ]
})
export class RadioButtonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { ViewDatePickerComponent } from './components/view-date-picker/view-date-picker.component';



@NgModule({
  declarations: [
    DatePickerComponent,
    ViewDatePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatePickerComponent,
    ViewDatePickerComponent
  ]
})
export class DatePickerModule { }

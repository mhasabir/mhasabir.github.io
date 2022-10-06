import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerComponent } from './date-time-picker.component';
import { ViewDateTimePickerComponent } from './components/view-date-time-picker/view-date-time-picker.component';



@NgModule({
  declarations: [
    DateTimePickerComponent,
    ViewDateTimePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateTimePickerComponent,
    ViewDateTimePickerComponent
  ]
})
export class DateTimePickerModule { }

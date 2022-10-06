import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker.component';
import { ViewTimePickerComponent } from './components/view-time-picker/view-time-picker.component';



@NgModule({
  declarations: [
    TimePickerComponent,
    ViewTimePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimePickerComponent,
    ViewTimePickerComponent
  ]
})
export class TimePickerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberBoxComponent } from './number-box.component';
import { ViewNumberBoxComponent } from './components/view-number-box/view-number-box.component';



@NgModule({
  declarations: [
    NumberBoxComponent,
    ViewNumberBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberBoxComponent,
    ViewNumberBoxComponent
  ]
})
export class NumberBoxModule { }

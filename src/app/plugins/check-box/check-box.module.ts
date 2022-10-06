import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { ViewCheckBoxComponent } from './components/view-check-box/view-check-box.component';



@NgModule({
  declarations: [
    CheckBoxComponent,
    ViewCheckBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckBoxComponent,
    ViewCheckBoxComponent
  ]
})
export class CheckBoxModule { }

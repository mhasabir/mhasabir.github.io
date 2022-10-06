import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box.component';
import { ViewTextBoxComponent } from './components/view-text-box/view-text-box.component';



@NgModule({
  declarations: [
    TextBoxComponent,
    ViewTextBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextBoxComponent,
    ViewTextBoxComponent
  ]
})
export class TextBoxModule { }

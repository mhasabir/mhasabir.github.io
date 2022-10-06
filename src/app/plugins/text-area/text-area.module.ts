import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './text-area.component';
import { ViewTextAreaComponent } from './components/view-text-area/view-text-area.component';



@NgModule({
  declarations: [
    TextAreaComponent,
    ViewTextAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextAreaComponent,
    ViewTextAreaComponent
  ]
})
export class TextAreaModule { }

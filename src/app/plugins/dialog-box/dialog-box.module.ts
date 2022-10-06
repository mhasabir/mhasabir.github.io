import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from './dialog-box.component';
import { ViewDialogBoxComponent } from './components/view-dialog-box/view-dialog-box.component';



@NgModule({
  declarations: [
    DialogBoxComponent,
    ViewDialogBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogBoxComponent,
    ViewDialogBoxComponent
  ]
})
export class DialogBoxModule { }

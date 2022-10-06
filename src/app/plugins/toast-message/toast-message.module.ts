import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message.component';
import { ViewToastMessageComponent } from './components/view-toast-message/view-toast-message.component';



@NgModule({
  declarations: [
    ToastMessageComponent,
    ViewToastMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastMessageComponent,
    ViewToastMessageComponent
  ]
})
export class ToastMessageModule { }

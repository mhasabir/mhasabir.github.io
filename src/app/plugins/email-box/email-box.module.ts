import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailBoxComponent } from './email-box.component';
import { ViewEmailBoxComponent } from './components/view-email-box/view-email-box.component';



@NgModule({
  declarations: [
    EmailBoxComponent,
    ViewEmailBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmailBoxComponent,
    ViewEmailBoxComponent
  ]
})
export class EmailBoxModule { }

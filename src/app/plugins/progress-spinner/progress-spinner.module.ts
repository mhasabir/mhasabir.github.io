import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { ViewProgressSpinnerComponent } from './components/view-progress-spinner/view-progress-spinner.component';



@NgModule({
  declarations: [
    ProgressSpinnerComponent,
    ViewProgressSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressSpinnerComponent,
    ViewProgressSpinnerComponent
  ]
})
export class ProgressSpinnerModule { }

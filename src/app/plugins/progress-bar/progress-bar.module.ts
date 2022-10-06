import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { ViewProgressBarComponent } from './components/view-progress-bar/view-progress-bar.component';



@NgModule({
  declarations: [
    ProgressBarComponent,
    ViewProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarComponent,
    ViewProgressBarComponent
  ]
})
export class ProgressBarModule { }

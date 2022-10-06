import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolTipComponent } from './tool-tip.component';
import { ViewToolTipComponent } from './components/view-tool-tip/view-tool-tip.component';



@NgModule({
  declarations: [
    ToolTipComponent,
    ViewToolTipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolTipComponent,
    ViewToolTipComponent
  ]
})
export class ToolTipModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { ViewTabComponent } from './components/view-tab/view-tab.component';



@NgModule({
  declarations: [
    TabComponent,
    ViewTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    ViewTabComponent
  ]
})
export class TabModule { }

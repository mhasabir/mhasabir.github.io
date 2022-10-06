import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ViewMenuComponent } from './components/view-menu/view-menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    ViewMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    ViewMenuComponent
  ]
})
export class MenuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDropdownComponent } from './select-dropdown.component';
import { ViewSelectDropdownComponent } from './components/view-select-dropdown/view-select-dropdown.component';



@NgModule({
  declarations: [
    SelectDropdownComponent,
    ViewSelectDropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectDropdownComponent,
    ViewSelectDropdownComponent
  ]
})
export class SelectDropdownModule { }

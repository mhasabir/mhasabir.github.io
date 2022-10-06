import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { ViewSearchBoxComponent } from './components/view-search-box/view-search-box.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    ViewSearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchBoxComponent,
    ViewSearchBoxComponent
  ]
})
export class SearchBoxModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleMapsRoutingModule } from './simple-maps-routing.module';
import { SimpleMapsComponent } from './simple-maps.component';
import { ViewSimpleMapsComponent } from './components/view-simple-maps/view-simple-maps.component';
import { ListSimpleMapsComponent } from './components/list-simple-maps/list-simple-maps.component';


@NgModule({
  declarations: [
    SimpleMapsComponent,
    ViewSimpleMapsComponent,
    ListSimpleMapsComponent
  ],
  imports: [
    CommonModule,
    SimpleMapsRoutingModule
  ]
})
export class SimpleMapsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSimpleMapsComponent } from './components/list-simple-maps/list-simple-maps.component';
import { ViewSimpleMapsComponent } from './components/view-simple-maps/view-simple-maps.component';
import { SimpleMapsComponent } from './simple-maps.component';

const routes: Routes = [
  {
    path: "", component: SimpleMapsComponent,
    children: [
      {path:'', component: ListSimpleMapsComponent},
      {path:'view', component: ViewSimpleMapsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleMapsRoutingModule { }

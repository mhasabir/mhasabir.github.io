import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { MaterialModule } from '../material/material.module';
import { YesNoPipe } from './yes-no.pipe';
import { ViewTableComponent } from './components/view-table/view-table.component';

@NgModule({
  declarations: [
    TableComponent,
    MatTableComponent,
    CustomTableComponent,
    YesNoPipe,
    ViewTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
    // FormsModule,
    // ReactiveFormsModule
  ],
  exports: [
    TableComponent,
    MatTableComponent,
    CustomTableComponent
  ]
})
export class TableModule { }

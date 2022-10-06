import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteDropdownComponent } from './autocomplete-dropdown.component';
import { ViewAutocompleteDropdownComponent } from './components/view-autocomplete-dropdown/view-autocomplete-dropdown.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AutocompleteDropdownComponent,
    ViewAutocompleteDropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    AutocompleteDropdownComponent,
    ViewAutocompleteDropdownComponent
  ]
})
export class AutocompleteDropdownModule { }

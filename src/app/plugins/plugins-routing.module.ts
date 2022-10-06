import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAutocompleteDropdownComponent } from './autocomplete-dropdown/components/view-autocomplete-dropdown/view-autocomplete-dropdown.component';
import { ViewButtonComponent } from './button/components/view-button/view-button.component';
import { ViewCheckBoxComponent } from './check-box/components/view-check-box/view-check-box.component';
import { ViewDatePickerComponent } from './date-picker/components/view-date-picker/view-date-picker.component';
import { ViewDateTimePickerComponent } from './date-time-picker/components/view-date-time-picker/view-date-time-picker.component';
import { ViewDialogBoxComponent } from './dialog-box/components/view-dialog-box/view-dialog-box.component';
import { ViewEmailBoxComponent } from './email-box/components/view-email-box/view-email-box.component';
import { ViewMenuComponent } from './menu/components/view-menu/view-menu.component';
import { ViewNumberBoxComponent } from './number-box/components/view-number-box/view-number-box.component';
import { PluginsComponent } from './plugins.component';
import { ViewProgressBarComponent } from './progress-bar/components/view-progress-bar/view-progress-bar.component';
import { ViewProgressSpinnerComponent } from './progress-spinner/components/view-progress-spinner/view-progress-spinner.component';
import { ViewRadioButtonComponent } from './radio-button/components/view-radio-button/view-radio-button.component';
import { ViewSearchBoxComponent } from './search-box/components/view-search-box/view-search-box.component';
import { ViewSelectDropdownComponent } from './select-dropdown/components/view-select-dropdown/view-select-dropdown.component';
import { ViewTabComponent } from './tab/components/view-tab/view-tab.component';
import { ViewTableComponent } from './table/components/view-table/view-table.component';
import { ViewTextAreaComponent } from './text-area/components/view-text-area/view-text-area.component';
import { ViewTextBoxComponent } from './text-box/components/view-text-box/view-text-box.component';
import { ViewTimePickerComponent } from './time-picker/components/view-time-picker/view-time-picker.component';
import { ViewToastMessageComponent } from './toast-message/components/view-toast-message/view-toast-message.component';
import { ViewToolTipComponent } from './tool-tip/components/view-tool-tip/view-tool-tip.component';

const routes: Routes = [
  {
    path: "", component: PluginsComponent,
    children: [
      { path: 'autocomplete-dropdown', component: ViewAutocompleteDropdownComponent },
      { path: 'button', component: ViewButtonComponent },
      { path: 'check-box', component: ViewCheckBoxComponent },
      { path: 'date-picker', component: ViewDatePickerComponent },
      { path: 'date-time-picker', component: ViewDateTimePickerComponent },
      { path: 'dialog-box', component: ViewDialogBoxComponent },
      { path: 'email-box', component: ViewEmailBoxComponent },
      { path: 'menu', component: ViewMenuComponent },
      { path: 'number-box', component: ViewNumberBoxComponent },
      { path: 'progress-bar', component: ViewProgressBarComponent },
      { path: 'progress-spinner', component: ViewProgressSpinnerComponent },
      { path: 'radio-button', component: ViewRadioButtonComponent },
      { path: 'search-box', component: ViewSearchBoxComponent },
      { path: 'select-dropdown', component: ViewSelectDropdownComponent },
      { path: 'tab', component: ViewTabComponent },
      { path: 'table', component: ViewTableComponent },
      { path: 'text-area', component: ViewTextAreaComponent },
      { path: 'text-box', component: ViewTextBoxComponent },
      { path: 'time-picker', component: ViewTimePickerComponent },
      { path: 'toast-message', component: ViewToastMessageComponent },
      { path: 'tool-tip', component: ViewToolTipComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PluginsRoutingModule } from './plugins-routing.module';
import { PluginsComponent } from './plugins.component';
import { AutocompleteDropdownModule } from './autocomplete-dropdown/autocomplete-dropdown.module';
import { ButtonModule } from './button/button.module';
import { CheckBoxModule } from './check-box/check-box.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { DateTimePickerModule } from './date-time-picker/date-time-picker.module';
import { DialogBoxModule } from './dialog-box/dialog-box.module';
import { EmailBoxModule } from './email-box/email-box.module';
import { MenuModule } from './menu/menu.module';
import { NumberBoxModule } from './number-box/number-box.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { ProgressSpinnerModule } from './progress-spinner/progress-spinner.module';
import { RadioButtonModule } from './radio-button/radio-button.module';
import { SearchBoxModule } from './search-box/search-box.module';
import { SelectDropdownModule } from './select-dropdown/select-dropdown.module';
import { TabModule } from './tab/tab.module';
import { TableModule } from './table/table.module';
import { TextAreaModule } from './text-area/text-area.module';
import { TextBoxModule } from './text-box/text-box.module';
import { TimePickerModule } from './time-picker/time-picker.module';
import { ToastMessageModule } from './toast-message/toast-message.module';
import { ToolTipModule } from './tool-tip/tool-tip.module';


@NgModule({
  declarations: [
    PluginsComponent
  ],
  imports: [
    CommonModule,
    PluginsRoutingModule,
    AutocompleteDropdownModule,
    ButtonModule,
    CheckBoxModule,
    DatePickerModule,
    DateTimePickerModule,
    DialogBoxModule,
    EmailBoxModule,
    MenuModule,
    NumberBoxModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    SearchBoxModule,
    SelectDropdownModule,
    TabModule,
    TableModule,
    TextAreaModule,
    TextBoxModule,
    TimePickerModule,
    ToastMessageModule,
    ToolTipModule,
  ]
})
export class PluginsModule { }

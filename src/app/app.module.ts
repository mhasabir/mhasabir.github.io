import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SystemComponent } from './modules/core/components/system/system.component';
import { CoreModule } from './modules/core/core.module';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpLocalClientService } from './services/http-local-client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    FilterPipe,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [HttpLocalClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

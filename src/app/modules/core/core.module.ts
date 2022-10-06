import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChangePasswordComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    ChangePasswordComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SidebarComponent,
  ]
})
export class CoreModule { }

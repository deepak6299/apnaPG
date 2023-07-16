import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BottomNavbarComponent,
 
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    HeaderComponent,
    BottomNavbarComponent,
    SidebarComponent,
   BottomNavbarComponent
  ]
})
export class SharedModule { }

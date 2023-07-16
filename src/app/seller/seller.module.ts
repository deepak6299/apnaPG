import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellerHomeComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    SellerHomeComponent
  ]
})
export class SellerModule { }

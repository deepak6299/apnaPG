import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { PgInfoComponent } from './components/pg-info/pg-info.component';
import { PgMoreInfoComponent } from './components/pg-more-info/pg-more-info.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    PgInfoComponent,
    PgMoreInfoComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[
    UserHomeComponent,
    PgInfoComponent,
    PgMoreInfoComponent
  ]
})
export class UsersModule { }

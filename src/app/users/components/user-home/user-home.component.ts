import { Component } from '@angular/core';
import { pgDetails } from 'src/app/data-types';
import { PgsellerService } from 'src/app/shared/services/pgseller.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  constructor(private _pgService:PgsellerService){}
  
pginfo:undefined|pgDetails[]

  ngOnInit(){
    this._pgService.getSeller().subscribe((result)=>{
    this.pginfo=result
    })
  }

}

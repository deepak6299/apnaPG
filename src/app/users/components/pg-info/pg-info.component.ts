import { Component } from '@angular/core';
import { pgDetails } from 'src/app/data-types';
import { PgsellerService } from 'src/app/shared/services/pgseller.service';

@Component({
  selector: 'app-pg-info',
  templateUrl: './pg-info.component.html',
  styleUrls: ['./pg-info.component.css']
})
export class PgInfoComponent {



  constructor(private _pgService:PgsellerService){}
  
  pginfo:undefined|pgDetails[]

  ngOnInit(){
    this._pgService.getSeller().subscribe((result)=>{
    this.pginfo=result
    })
  }
}

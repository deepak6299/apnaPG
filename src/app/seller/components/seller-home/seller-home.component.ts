import { Component } from '@angular/core';
import { pgDetails } from 'src/app/data-types';
import { PgsellerService } from 'src/app/shared/services/pgseller.service';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {



constructor(private _pgservice:PgsellerService){}

postsSeller(Data:pgDetails){
  this._pgservice.postSeller(Data).subscribe((result)=>{
    console.log("Post Success", result);

  })
}

// get function
pgdetails:any
ngOnInit():void{
  this._pgservice.getSeller().subscribe((result)=>{
    console.log(result);
    this.pgdetails=result
  })
}

// call delete api 
deleteSellers(id:number){
  this._pgservice.deleteSeller(id).subscribe((result)=>{
    alert('Deleted Successfully')
    this.ngOnInit()
  })
}

}

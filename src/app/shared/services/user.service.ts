import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userDetails } from 'src/app/data-types';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUseLoggedIn=new BehaviorSubject<boolean>(false)

  constructor(private _http:HttpClient,private router:Router) { }

postUser(Data:userDetails){
 this._http.post('http://localhost:3000/users',Data,
{observe:'response'}).subscribe((result)=>{
  this.isUseLoggedIn.next(true);
  localStorage.setItem('user',JSON.stringify(result.body))
  this.router.navigate(['user-home']);
})
}

reloadUser(){
  if(localStorage.getItem('user')){
    this.isUseLoggedIn.next(true);
    this.router.navigate(['user-home']);
  }
}

}

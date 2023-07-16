import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { pgDetails } from 'src/app/data-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PgsellerService {

  constructor(private _http:HttpClient) { }

  // post API
postSeller(Data:pgDetails){
  return this._http.post('http://localhost:3000/posts',Data)
}

// Get API
getSeller(){
  return this._http.get<pgDetails[]>('http://localhost:3000/posts')
}

 // GET PG Details by ID API
 getPgDetailsById(id: string): Observable<pgDetails> {
  return this._http.get<pgDetails>(`http://localhost:3000/posts/${id}`);
}

// Delete API
deleteSeller(id:number){
  return this._http.delete(`http://localhost:3000/posts/${id}`)
}

}

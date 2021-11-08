import { Http,Response } from '@angular/http';
// import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';


@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'

  constructor(private _http:Http) { }


  getAlbum(id:number):Observable<any>{
    return  this._http.get(this._albumUrl).map((response)=>{
      return response.json()
    })

  }

}

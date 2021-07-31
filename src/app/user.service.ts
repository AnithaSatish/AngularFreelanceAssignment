import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {retry} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }



getUsers():Observable<any[]>{
  const urlData:string="https://reqres.in/api/users"
  return this.httpclient.get<any[]>(urlData).pipe(
    retry(1)
  )
}

}

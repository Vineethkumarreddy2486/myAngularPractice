import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(){
   return this.http.post("http://127.0.0.1:8000/register" , {
        "username": "navesdfdfdn",
        "password": "234",
        "email": "sdafd@gmail.com"
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  setLogin(login:string){localStorage.setItem("login",login);}
  getLogin(){return localStorage.getItem("login");}

  setId(id:string){localStorage.setItem("id",id);}
  getId(){return localStorage.getItem("id");}

  setRole(role:string){localStorage.setItem("role",role);}
  getRole(){return localStorage.getItem("role");}

  setToken(token:string){localStorage.setItem("token",token);}
  getToken(){return localStorage.getItem("token");}

  setIsLoggedIn(isLoggedIn:string){localStorage.setItem("isLoggedIn",isLoggedIn);};
  getIsLoggedIn(){return localStorage.getItem("isLoggedIn");}

  registerUser(user : User) : Observable<User>{
    return this.http.post<User>('http://localhost:8080/api/auth/register', user);
  }

  authenticateUser(user : User){
    return this.http.post<any>('http://localhost:8080/api/auth/authenticate', user);
  }

  singOut(){
    const token= this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.get<any>('http://localhost:8080/api/auth/logout', httpOptions);
  }
}
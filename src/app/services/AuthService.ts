import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Register } from '../models/register';
import { PassWord } from '../models/Password';
import { Role } from '../Utils/Role';
import { ROLES } from '../Utils/ROLES';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userRoles: Role[] = ROLES;

  constructor(private http: HttpClient, private router: Router) { }

  setLogin(login: string) { localStorage.setItem("login", login); }
  getLogin() { return localStorage.getItem("login"); }

  setId(id: string) { localStorage.setItem("id", id); }
  getId() { return localStorage.getItem("id"); }

  setRole(role: string) { localStorage.setItem("role", role); }
  getRole() { return localStorage.getItem("role"); }

  setToken(token: string) { localStorage.setItem("token", token); }
  getToken() { return localStorage.getItem("token"); }

  setIsLoggedIn(isLoggedIn: string) { localStorage.setItem("isLoggedIn", isLoggedIn); };
  getIsLoggedIn() { return localStorage.getItem("isLoggedIn"); }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/api/auth/register', user);
  }

  authenticateUser(user: User) {
    return this.http.post<any>('http://localhost:8080/api/auth/authenticate', user);
  }

  // Méthode pour obtenir les rôles de l'utilisateur
  getUserRoles(roleName: string): string[] {
    const role = this.userRoles.find(r => r.name === roleName);
    return role ? role.path : [];
  }

  singOut() {
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.get<any>('http://localhost:8080/api/auth/logout', httpOptions).subscribe({
      next: (res) => {

      }, error: (err) => {
        if (err instanceof HttpErrorResponse) {
          const code = err.status;
          if (code === 200) {
            localStorage.clear();
            this.router.navigate([""]);
          }
        }
      }
    });
  }
  register(register: Register) {
    return this.http.post('http://localhost:8080/api/auth/register', register);
  }
  editCompte(id: number, newCompte:Register):Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.put('http://localhost:8080/editUser', newCompte, httpOptions);
  }
  editProfile(id: number, newCompte:Register):Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.put('http://localhost:8080/editProfile/'+id, newCompte, httpOptions);
  }
  getCompte(idUser:number):Observable<any>{
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.get('http://localhost:8080/getUser/'+idUser, httpOptions);
  }
  getDepartement(id: number): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.get('http://localhost:8080/api/auth/getDepartement/' + id, httpOptions);
  }

  getAllEnseignants(dept: String): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.get('http://localhost:8080/getEnseignants/' + dept, httpOptions);
  }
  getAllTechs(): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.get('http://localhost:8080/getTechniciens', httpOptions);
  }
  getAllChefs(): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.get('http://localhost:8080/getChefs', httpOptions);
  }
  deleteCompte(idUser: number): Observable<any> {
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    return this.http.delete('http://localhost:8080/deleteUser/' + idUser, httpOptions);
  }
  changePassword(newPassword : PassWord):Observable<any>{
    const token = this.getToken();
    const httpOptions = {
      headers: {
        "Authorization": "Bearer " + token
      }
    };
    console.log("token : "+token);
    return this.http.put('http://localhost:8080/changePassword', newPassword, httpOptions);
  }
}
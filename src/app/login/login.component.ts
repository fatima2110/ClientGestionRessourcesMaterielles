import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  mode: string = 'register'; // Initialisation du mode à 'register'
  loginForm!: FormGroup;
  errorMessage : string = "";
  token!:any;
  role!:any;

  constructor(private router: Router,private authService:AuthService, private formBuilder: FormBuilder) { }

  onSubmit() {
    this.errorMessage = "";
   /*if (this.mode === 'register') {
      this.authService.registerUser(this.user)
      .subscribe(
        (response) => {
          console.log("registration successful !!");
        }
      );
      this.mode = 'authentificate';
    } else {*/
    this.authService.authenticateUser(this.user)
    .subscribe({
      next : (response)=>{
        this.token = response.token;
        //localStorage.setItem('token', response.token);
        this.role = response.role;
        if(this.role == "ENSEIGNANT"){
          this.authService.setLogin(this.user.login);
          this.authService.setRole(this.role);
          this.authService.setToken(this.token);
          this.authService.setIsLoggedIn("true");
          this.router.navigate(['/departement']);
        }else this.router.navigate(['/error']);
      },error : (err)=>{
        console.log(err);
        const errorCode = err.status;
        if (errorCode === 403) {
          this.errorMessage="Login ou mot de passe incorrect";
          console.log("Login ou mot de passe incorrect");
        } 
      }
    });
   //}
  }
  //getToken(){return this.token;}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control(null,[Validators.required]),
      password: this.formBuilder.control(null,[Validators.required])
    });
  }

}
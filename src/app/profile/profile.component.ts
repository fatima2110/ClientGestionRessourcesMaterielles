import { Component, OnInit } from '@angular/core';
import { Register, Role } from '../models/register';
import { AuthService } from '../services/AuthService';
import { PassWord } from '../models/Password';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile = new Register();
  isTech = false;
  password = new PassWord();
  matchPassword = '';
  id!:number;
  imageUrl: string = '';
  notif = 0;

  onFileSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0){
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onDeleteImage(event: MouseEvent) {
    event.preventDefault();
    this.profile.photo = '';
    this.imageUrl = '';
}  

  constructor(private auth:AuthService){}
  ngOnInit(): void {
    this.id = this.auth.getId();
    this.auth.getCompte(this.id).subscribe({
      next: (res) => {
        console.log(res)
        this.profile = res;
        if(this.profile.role.toString() === "TECHNICIEN"){
          this.profile.departement = "Service de maintenance";
        }
      }, error: (err) => {
        console.log(err)
      }
    });
  }
  editProfile(){
    const idUser = this.auth.getId();
    this.auth.editProfile(this.profile.id, this.profile).subscribe({
        next: (res) => {
          this.notif = 3;
          console.log(res)
        }, error: (err) => {
          console.log(err);
        }
      });
  }
  changePassword(){
    this.auth.changePassword(this.password).subscribe({
      next: (res) => {
        this.notif = 1;
        console.log(res);
        this.clear();
      }, error: (err) => {
        if (err.status === 403) {
          this.notif = 2;
          console.log(err);
          this.clear();
        }
      }
    });
  }
  clear(){
    this.password=new PassWord();
    this.matchPassword='';
    this.ngOnInit();
  }
}

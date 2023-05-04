import {Component, OnInit} from '@angular/core';
import {Fournisseur} from "../Model/Fournisseur";
import {LoginService} from "../services/login.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import { Register, Role } from 'src/app/models/register';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{

  Four!:Fournisseur;
  FormIns!: FormGroup;
  pass!:String;

constructor(private LogSer:LoginService,private Fb:FormBuilder,private Rout:Router) {
}
  ngOnInit(): void {
    this.FormIns=this.Fb.group({
      Soci_Name:this.Fb.control(""),
      Pass:this.Fb.control(""),
      Pass2:this.Fb.control("")
    });
  }

 Inscrip(){
   if(this.FormIns.value.Soci_Name== "" ||this.FormIns.value.Pass== ""||this.FormIns.value.Pass!=this.FormIns.value.Pass2)
     alert("VOUS DEVREZ VERIFIER LES INFOS SAISIS ");
   else {
     let conf=confirm("etez-vous sur des infos saisi Monsieur "+this.FormIns.value.Soci_Name);
     if(conf==true){
      let register = new Register();
    register.login = this.FormIns.value.Soci_Name;
    register.password = this.FormIns.value.Pass;
    register.setRole("FOURNISSEUR");
    alert("register object : "+ register.role)
     this.LogSer.Inscrip(register).subscribe({
        next: (res) => {
          console.log(res)
        }, error: (err) => {
          alert("error")
          console.log(err)
        }
      });
  
       this.Rout.navigateByUrl("/");
   }
   }

}

}

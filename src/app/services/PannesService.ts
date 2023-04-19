import { Injectable } from '@angular/core';
import { Ordinateur } from '../models/ordinateur';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class PanneService {
  constructor(private httpClient:HttpClient, private auth:AuthService) { }
  
}

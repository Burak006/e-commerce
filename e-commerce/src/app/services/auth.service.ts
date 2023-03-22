
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserModel } from '../models/loginUser';
import { ITokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path:string="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  login(user:LoginUserModel){
    return this.httpClient.get<ITokenModel[]>
  (this.path+"/?email="+user.email+"&pasword="+user.pasword)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}

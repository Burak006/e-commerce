import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersGetModel } from '../models/UsersGetModel';
import { LoginUserModel } from '../models/loginUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<UsersGetModel[]>{
    return this.httpClient.get<UsersGetModel[]>(this.userUrl)
  }
  
  userAdd(users:UsersGetModel):Observable<UsersGetModel> {
    return this.httpClient.post<UsersGetModel>(this.userUrl + "/", users);
  }

  loginGetUser(loginUser:LoginUserModel):Observable<LoginUserModel[]>{
    return this.httpClient.get<LoginUserModel[]>(this.userUrl+"?email="+loginUser.email+"&pasword="+loginUser.pasword)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}

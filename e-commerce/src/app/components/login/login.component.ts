import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { UsersGetModel } from 'src/app/models/UsersGetModel';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ITokenModel } from 'src/app/models/token-model';
import { LoginUserModel } from 'src/app/models/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenModel:ITokenModel;
  users:UsersGetModel[]=[];
  loginForm:FormGroup;
  constructor(private usersService:UsersService,
    private toastr: ToastrService,
    private formBuilder:FormBuilder,
    private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.createLoginForm(),
    this.login()
  }

   createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      pasword:["",Validators.required]
    })
   }

  
   login(){
    if(this.loginForm.valid){
    let user:LoginUserModel=this.loginForm.value
    this.usersService.loginGetUser(user).subscribe(data=>{
      if(data.length>0){
        this.tokenModel = data[0];
    localStorage.setItem("token",this.tokenModel.token)
        this.router.navigate(["products"])
        alert("Başarılı:)")
      }
      else {alert("başarısız!!")}
    })
  }
   }


}

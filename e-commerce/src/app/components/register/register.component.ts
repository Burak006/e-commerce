import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { UsersGetModel } from 'src/app/models/UsersGetModel';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

users:UsersGetModel[]=[];
usersAdd:FormGroup

  constructor(private formbuilder:FormBuilder,
    private UsersService:UsersService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

   createUserAddForm(){
    this.usersAdd= this.formbuilder.group({
      name:["",[Validators.required,]],
      surname:["",[Validators.required,]],
      email:["",[Validators.required,]],
      pasword:["",[Validators.required,]]
    })
  }

  userAdd(){
   if(this.usersAdd.valid){
    this.UsersService.userAdd(this.usersAdd.value).subscribe((response)=>{
      console.log(response); })
      this.toastr.success('kayıt Başarılı:)');
  }
}
}

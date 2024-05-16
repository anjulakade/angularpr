import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent implements OnInit ,OnChanges
 {

   constructor(private fb:FormBuilder ,private us:UserService){}
 
  registerForm:FormGroup;
  @Input() userToBeEdit:User;
  flag:boolean=false
  ngOnInit(): void {
    this.registerForm=this.fb.group({
        id:[],
        username:[],
        age:[],
        email:[],
        password:[]


    })
   }
  ngOnChanges():void {
        if(this.registerForm!=null){
this.registerForm.patchValue(this.userToBeEdit);
this.flag=true;
        }


  }
  onsubmit()
  {
if(this.flag==false && this.registerForm.controls['id'].value!=null){ 
this.us.saveUser(this.registerForm.value).subscribe()

}
else if(this.flag==true){

  this.us.updateUser(this.registerForm.value).subscribe();
  alert("this user  upadate Succefully..!");
}

else if(this.registerForm.value==null){
  alert("Invalid details")
}
this.registerForm.reset();
//window.location.reload()
  }
  

}

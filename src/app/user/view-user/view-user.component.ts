import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent  implements OnInit
{
  constructor(private fb:FormBuilder ,private us:UserService){}
  registerForm:FormGroup;

   users:User[]
@Output() emmitUser:EventEmitter<User>=new EventEmitter();
  ngOnInit(): void {
   
    this.us.getAllUser().subscribe((res:User[])=>{

    this.users = res;
    //  console.log(res)
    })
  
}
onEditUser(u:User)
{
  alert(u.id)
  this.emmitUser.emit(u)

}
onDelete(user:User){
this.us.userDelete(user).subscribe();
alert("data deleted")
}
}


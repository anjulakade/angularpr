import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day21CrudDay1';

   editUser:User

  receiveEditData(user:User){
//   console.log("In AppComponent");
// console.log(user);
 this.editUser=user
  }
  
}

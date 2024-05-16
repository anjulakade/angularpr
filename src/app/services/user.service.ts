import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  subscribe(arg0: (data: User[]) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  saveUser(user1:User)     //:Observable<User>
  {
// console.log("services")
// console.log(user)
 //return this.http.post<User>("http://localhost:5000/user",user1);
 return this.http.post<User>( "http://localhost:9090/saveUser",user1);
  }
  getAllUser()
  {
   // return this.http.get("http://localhost:5000/user");
   return this.http.get("http://localhost:9090/getallusers")
  }
  updateUser(user:User)
  {
  // return this.http.put(`http://localhost:5000/user/${user.id}`,user);
  return this.http.put(`http://localhost:9090/updatebyPut/${user.id}`,user);
  }
  userDelete(u:User){
    // return this.http.delete(`http://localhost:5000/user/${u.id}`) 
    return this.http.delete(`http://localhost:9090/deletebyId/${u.id}`)
   }
}

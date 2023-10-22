import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  async getUsers(){
    return await axios.get("https://api.slingacademy.com/v1/sample-data/users");
  }

  async postUser(data:any){
    await axios.post("https://api.slingacademy.com/v1/sample-data/users",data);
  }

  deleteUser(){
   console.log('hello')
  }
}

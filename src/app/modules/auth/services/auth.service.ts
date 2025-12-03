import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  env: string = "https://fakestoreapi.com/users";
  getUsers() {
    return this.http.get(this.env);
  }

  addUser(data: any) {
    return this.http.post('https://fakestoreapi.com/users', data);
  }

  updatePutUser(data: any, id: number) {
    return this.http.put(`https://fakestoreapi.com/users/${id}`, data);
  }

  updatePatchUser(data: any, id: number) {
    return this.http.patch(`https://fakestoreapi.com/users/${id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`https://fakestoreapi.com/users/${id}`);
  }


}

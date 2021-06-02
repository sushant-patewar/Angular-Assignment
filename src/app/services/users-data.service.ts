import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  userList = 'https://reqres.in/api/users?page=1'
  singleUser = 'https://reqres.in/api/users/2'

constructor(private http: HttpClient) { }

getUsersList(): Observable<any>{
return this.http.get<any>(this.userList);
}

getSingleUser():Observable<any>{
  return this.http.get<any>(this.singleUser);
}

}

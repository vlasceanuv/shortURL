import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Statistic } from './statistic';
import { Observable } from 'rxjs';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseURL = "http://localhost:8080/api/admin";
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  public username: String;
  public password: String;

  constructor(
    private httpClient:HttpClient
  ) { 
     }

  authenticate(username: String, password: String) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>(`${this.baseURL}/validateLogin`,{headers}).pipe(
     map(
       userData => {
        this.username = username;
        this.password = password;
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME,username+'');
        sessionStorage.setItem('basicauth', btoa(username + ':' + password));
        return userData;
       }
     )

    );
  }

  getStatistics(): Observable<Statistic[]> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.httpClient.get<Statistic[]>(`${this.baseURL}/statistics`,{headers})
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
const httpOptions = ({
  headers: new HttpHeaders({'Content-Type': 'application/json'})
})

@Injectable({
  providedIn: 'root'
})

export class UserService {

  api_link: string = "http://localhost:8000/"

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
    return this.http.post(this.api_link + 'api/users/', userData )
  }

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post(this.api_link + 'api-auth/login/', {username, password}, httpOptions).pipe(
      map(user => {
        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
      })
    )
  }

  logout() {
    localStorage.removeItem('currentUser')
  }
}

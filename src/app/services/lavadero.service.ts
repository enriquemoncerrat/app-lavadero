import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { User } from '../model/user';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LavaderoService {


  private  uri = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public getUser(): Observable<User>{
    return this.http.get<User>(this.uri+"/user");
  }
}

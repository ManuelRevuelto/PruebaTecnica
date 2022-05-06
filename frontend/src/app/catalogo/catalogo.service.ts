import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private apiURL = "http://localhost:8000/laravel/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private url = "http://localhost:8000/api/person/";
   
  constructor(private httpClient: HttpClient) { }
  
  getPerson(){
    return this.httpClient.get(this.url);
  }
  
  create(person: any){
    return this.httpClient.post(this.url, JSON.stringify(person));
  }
}

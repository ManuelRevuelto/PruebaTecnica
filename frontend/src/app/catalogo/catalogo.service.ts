import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Catalogo } from './catalogo';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  private apiURL = 'http://localhost:8000/api/catalogo/';
  nombre!: string;
  descripcion!: string;
  id!: number;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Catalogo[]> {
    return this.httpClient
      .get<Catalogo[]>(this.apiURL)
      .pipe(catchError(this.errorHandler));
  }

  create(Catalogo: {
    nombre: string;
    descripcion: string;
  }): Observable<Catalogo> {
    return this.httpClient
      .post<Catalogo>(this.apiURL, JSON.stringify(Catalogo), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  find(id: number): Observable<Catalogo> {
    return this.httpClient
      .get<Catalogo>(this.apiURL + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: number, Catalogo: any): Observable<Catalogo> {
    return this.httpClient
      .put<Catalogo>(
        this.apiURL + id,
        JSON.stringify(Catalogo),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient
      .delete<Catalogo>(this.apiURL + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiURL = 'http://localhost:8000/api/articles/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Article[]> {
    return this.httpClient
      .get<Article[]>(this.apiURL)
      .pipe(catchError(this.errorHandler));
  }

  create(Article:Article): Observable<Article> {
    return this.httpClient
      .post<Article>(this.apiURL, JSON.stringify(Article), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  find(id: number): Observable<Article> {
    return this.httpClient
      .get<Article>(this.apiURL + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: number, article: Article): Observable<Article> {
    return this.httpClient
      .put<Article>(
        this.apiURL + id,
        article
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient
      .delete<Article>(this.apiURL + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.status
    }
    return throwError(errorMessage);
  }
}

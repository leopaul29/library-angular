import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = environment.apiUrl;
  apiUrl = this.baseUrl + 'api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}

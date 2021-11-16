import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      isbn: 1,
      title: 'Harry Porter - Book 1',
      author: '	J. K. Rowling',
    },
    {
      isbn: 2,
      title: 'Harry Porter - Book 2',
      author: '	J. K. Rowling',
    },
    {
      isbn: 3,
      title: 'The Hobbits',
      author: 'J. R. R. Tolkien',
    },
  ];

  baseUrl = environment.apiUrl;
  apiUrl = this.baseUrl + 'api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return of(this.books);
    //return this.http.get<Book[]>(this.apiUrl);
  }
}

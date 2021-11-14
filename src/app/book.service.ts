import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  apiULR = 'http://leopaul29-library-database.herokuapp.com/api/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return of(this.books);
    // let header = new HttpHeaders();
    // header.set('Access-Control-Allow-Origin', '*');

    // return this.http.get<Book[]>(this.apiULR + 'books', { headers: header });
  }
}

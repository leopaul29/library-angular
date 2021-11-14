import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {
      isbn: 1,
      title: 'habits 1',
      author: 'leopaul29',
    },
    {
      isbn: 2,
      title: 'habits 2',
      author: 'leopaul29',
    },
    {
      isbn: 3,
      title: 'habits 3',
      author: 'leopaul29',
    },
  ];
  
  constructor() { }
}

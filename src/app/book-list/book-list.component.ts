import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  template: ` <h1>List</h1>
    <div *ngIf="statusCode || errmsg">
      <div *ngIf="statusCode != 200" type="danger">{{ errmsg }}</div>
      <div *ngIf="statusCode === 200" type="success"
        >Book has been deleted successfully.</div
      >
    </div>
    <ul>
      <div *ngFor="let book of books">
        <div>{{ book.title }} (from: {{ book.author }})</div>
      </div>
    </ul>`,
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  statusCode: number = 0;
  errmsg: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      (books) => {
        console.log('books', books);
        this.books = books;
      },
      (error) => {
        this.statusCode = error.statusCode;
        this.errmsg = error.message;
      }
    );
  }
}

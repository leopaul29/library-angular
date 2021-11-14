import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  template: ` <h1>List</h1>
    <ul>
      <div *ngFor="let book of books">
        <div>{{ book.title }} (from: {{ book.author }})</div>
      </div>
    </ul>`,
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      console.log('books', books);
      this.books = books;
    });
  }
}

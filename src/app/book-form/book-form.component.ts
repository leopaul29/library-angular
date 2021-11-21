import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  template: `
    <form [formGroup]="bookForm" (ngSubmit)="onSubmit(bookForm.value)">
      <input type="text" placeholder="Add title" formControlName="title" />
      <input type="text" placeholder="Add author" formControlName="author" />
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  bookForm;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(newBook: Book) {
    this.bookService.addBook(newBook);
    this.bookForm.reset();
  }
}

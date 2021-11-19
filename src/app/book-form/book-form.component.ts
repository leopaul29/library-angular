import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  template: `
    <form [formGroup]="bookForm" (ngSubmit)="onSubmit(bookForm.value)">
      <input type="text" placeholder="Add book" formControlName="title" />
      <input type="text" placeholder="Add book" formControlName="author" />
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm;
  @Output() addBook = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      title: '',
      author: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(newBook: Book) {
    this.addBook.emit(newBook);
    this.bookForm.reset();
  }

}

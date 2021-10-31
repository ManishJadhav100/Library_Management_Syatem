import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor( private bService: BookService) { }

  books: any;
  selectedBook: any;

  ngOnInit(): void {
    this.allBooks();
  }

  allBooks() {
    this.bService.getAllBooks().subscribe(data => {
      this.books = data;
    }),
    error => {
      console.log(error)
    }
  }

}

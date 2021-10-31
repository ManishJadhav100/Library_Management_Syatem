import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: any;
  constructor( private bService: BookService ) { }

  ngOnInit() {
  }

  AddBook = () => {
    this.bService.addBook(this.book).subscribe(
      data => {
        this.book.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }

}

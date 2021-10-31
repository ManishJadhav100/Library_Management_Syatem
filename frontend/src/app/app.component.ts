import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'library';
  selectedBook: any;
  constructor( private bService: BookService ) { }

  ngOnInit(): void {
  }

  addNewBook() {
    this.bService.redirect('add-book');
  }

  signup() {
    this.bService.redirect('signup-user');
  }

  login() {
    this.bService.redirect('login-user');
  }

  
}



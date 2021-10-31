import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  api_link: string = "http://localhost:8000/"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router,) { }

  getAllBooks(): Observable<any> {
    return this.http.get(this.api_link + 'api/books/')
  }

  getOneBook(id): Observable<any> {
    return this.http.get(this.api_link + 'api/books/' + id + '/')
  }

  addBook(book): Observable<any> {
    const body = {
      title: book.title,
      author: book.author,
      category: book.category,
      publication: book.publication,
      publication_date: book.publication_date,
      price: book.price
    }
    return this.http.post(this.api_link + 'api/books/create/', body, {headers: this.httpHeaders});
  }

  redirect(routeLink) {
    this.router.navigate([routeLink]);
  }


}

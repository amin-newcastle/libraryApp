import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-requests/web-request.service';
import {Book} from "../../models/book.interface";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = '/api/library';

  constructor(private webReqService: WebRequestService) { }

  getBook(isbn: string) {
    const getBookUrl = this.url + "/" + isbn;
    return this.webReqService.get(getBookUrl).toPromise();
    // await this.http.get(this.url).toPromise();
  }

  getBooks() {
    const getBookUrl = this.url;
    return this.webReqService.get(getBookUrl).toPromise();
  }

  addBook(book: Book) {
    const addBookUrl = this.url;
    return this.webReqService.post(addBookUrl, book).toPromise();
  }

}

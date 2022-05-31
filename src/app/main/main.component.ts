import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../models/book.interface";
import {BookService} from "../services/book/book.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public books: Book[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService) { }

  gotoBookForm() {
    this.router.navigateByUrl('add-book');

  }

  async ngOnInit() {
    await this.getBooks();
  }

  async getBooks() {
    console.log('I am in getBooks');
    const response: Object | undefined = await this.bookService.getBooks();
    console.log(response);
    if (response) {
      this.books = response as Book[];
      console.log(this.books);
    }
  }

}

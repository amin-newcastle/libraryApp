import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Book } from '../models/book.interface';
import {BookService} from "../services/book/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {

  public book!: Book;
  ISBN: string = "";

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.route.params.subscribe((params) => {
      this.ISBN = params['ISBN'];
    });
  }

  async ngOnInit() {
    await this.getBook();
  }

  async getBook() {
    console.log('I am in getBook');
    const response: Object | undefined = await this.bookService.getBook(this.ISBN);
    console.log(response);
    if (response) {
      this.book = response as Book;
      console.log(this.book);
    }
  }

}

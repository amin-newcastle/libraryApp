import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book/book.service";
import {Book} from "../models/book.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.sass']
})
export class BookFormComponent implements OnInit {

  public book!: Book;


  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.book = {
      ISBN: 9,
      title: "",
      author: "",
      synopsis: ""
    }
  }

  async submit(){
    await this.createBook(this.book);
    // console.log(this.book);
  }

  async createBook(book: Book) {
    const response: any = await this.bookService.addBook(book);
    if (response?.success) {
      console.log('success');
      const isbn = response.isbn;
      await this.router.navigate(['/book', isbn]);
    }
  }

}

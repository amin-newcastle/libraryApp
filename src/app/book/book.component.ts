import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import { Book } from '../models/book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  isbn = "";
  book!: Book;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isbn = params['ISBN'];
    });
    const url = '/api/library/';
    const response: any = await this.http.get(url + this.isbn).toPromise();
    console.log(response);
    if (response) {
      this.book = response;
      console.log(this.book);
    }
    if (this.isbn) {

    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  url = '/api/library';
  library!: Book[];
  
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    const response: any = await this.http.get(this.url).toPromise();
    console.log(response);
    if (response) {
      this.library = response;
      console.log(this.library);
    }
  }

}

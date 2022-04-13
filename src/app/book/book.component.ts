import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  isbn = 9781365108105;
  title = "Rich Dad, Poor Dad";
  author = "Robert T. Kiyosaki";
  synopsis = "\n" +
    "In Rich Dad Poor Dad, the #1 Personal Finance book of all time, Robert Kiyosaki shares the story of his two dad: his real father, whom he calls his poor dad,’ and the father of his best friend, the man who became his mentor and his rich dad.’ One man was well educated and an employee all his life, the other’s education was street smarts” over traditional classroom education and he took the path of entrepreneurship a road that led him to become one of the wealthiest men in Hawaii. Robert’s poor dad struggled financially all his life, and these two dads these very different points of view of money, investing, and employment shaped Robert’s thinking about money.\n" +
    "\n" +
    "Robert has challenged and changed the way tens of millions of people, around the world, think about money and investin...";


  constructor() { }

  ngOnInit(): void {
  }

}

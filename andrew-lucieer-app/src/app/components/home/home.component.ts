import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  quotes: Quote[] = [
    { quote: "People ignore design that ignores people.", author: "Frank Chimero" },
    { quote: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" },
    { quote: "Stay hungry, stay foolish", author: "Steve Jobs" },
    { quote: "Never use a long word where a short one will do.", author: "George Orwell" }
  ];
  
  randomQuote: Quote;

  constructor() {
    this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

}

interface Quote {
  quote: string,
  author: string
}
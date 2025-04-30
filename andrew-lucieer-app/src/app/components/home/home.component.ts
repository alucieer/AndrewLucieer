import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  quotes: Quote[] = [
    { quote: "People ignore design that ignores people.", author: "Frank Chimero" },
    { quote: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" },
    { quote: "Stay hungry, stay foolish", author: "Steve Jobs" },
    { quote: "Never use a long word where a short one will do.", author: "George Orwell" },
    { quote: "A delayed game is eventually good, but a rushed game is forever bad.", author: "Shigeru Miyamoto" }
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
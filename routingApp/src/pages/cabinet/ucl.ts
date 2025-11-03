import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ucl',
  imports: [CommonModule],
  templateUrl: './ucl.html',
  styleUrl: './ucl.css',
})
export class Ucl {
  title = 'UEFA Champions League - Finals Results';
  finals = [
    { year: 2015, match: 'Barcelona 3–1 Juventus' },
    { year: 2011, match: 'Barcelona 3–1 Manchester United' },
    { year: 2009, match: 'Barcelona 2–0 Manchester United' },
    { year: 2006, match: 'Barcelona 2–1 Arsenal' },
    { year: 1992, match: 'Barcelona 1–0 Sampdoria' }
  ];
}

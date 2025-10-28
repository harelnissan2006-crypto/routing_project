import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabinet',
  imports: [CommonModule],
  templateUrl: './cabinet.html',
  styleUrl: './cabinet.css',
})
export class Cabinet {
  title = 'Trophy Cabinet:';
  trophies = [
    { name: 'La Liga', count: 27 },
    { name: 'Copa del Rey', count: 31 },
    { name: 'UEFA Champions League', count: 5 },
    { name: 'FIFA Club World Cup', count: 3 },
  ];
}

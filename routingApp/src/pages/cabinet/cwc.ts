import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cwc',
  imports: [CommonModule],
  templateUrl: './cwc.html',
  styleUrl: './cwc.css',
})
export class Cwc {
  title = 'FIFA Club World Cup - Finals Results';
  finals = [
    { year: 2015, match: 'Barcelona 3-0 River Plate' },
    { year: 2011, match: 'Barcelona 4-0 Santos' },
    { year: 2009, match: 'Barcelona 2-1 Estudiantes' }
  ];
}

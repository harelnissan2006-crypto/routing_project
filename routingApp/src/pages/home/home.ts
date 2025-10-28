import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  text = 'Please enjoy the results of the 24/25 season El Clasicos!!!!!!!!!'
  dates = ['26-10-2024', '12-01-2025', '26-04-2025', '11-05-2025'];
  stadiums = ['Santiago Bernabéu', 'King Abdullah Sports City', 'Estadio de La Cartuja', 'Montjuïc'];
  results = ['0-4', '5-2', '3-2', '4-3'];
  motms = ['Robert Lewandowski', 'Raphinha', 'Ferran Torres', 'Lamine Yamal'];
  
}

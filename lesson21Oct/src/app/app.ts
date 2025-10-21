import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
interface Player {
  fullName: string;
  position: string;
  age: number;
  nationality: string;
  contractEnd: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  rawJson: string = `[
    {"fullName":"Marc-André ter Stegen","position":"Goalkeeper","age":33,"nationality":"Germany","contractEnd":"2028-06-30"},
    {"fullName":"Joan García Pons","position":"Goalkeeper","age":24,"nationality":"Spain","contractEnd":"2031-06-30"},
    {"fullName":"Wojciech Tomasz Szczęsny","position":"Goalkeeper","age":35,"nationality":"Poland","contractEnd":"2027-06-30"},
    {"fullName":"Alejandro Balde Martínez","position":"Left-Back","age":22,"nationality":"Spain","contractEnd":"2028-06-30"},
    {"fullName":"Ronald Araujo","position":"Centre-Back","age":26,"nationality":"Uruguay","contractEnd":"2031-06-30"},
    {"fullName":"Pau Cubarsí Vives","position":"Centre-Back","age":18,"nationality":"Spain","contractEnd":"2029-06-30"},
    {"fullName":"Andreas Bødtker Christensen","position":"Centre-Back","age":29,"nationality":"Denmark","contractEnd":"2026-06-30"},
    {"fullName":"Gerard Martín Langreo","position":"Left-Back","age":23,"nationality":"Spain","contractEnd":"2028-06-30"},
    {"fullName":"Jules Olivier Koundé","position":"Right-Back","age":26,"nationality":"France","contractEnd":"2030-06-30"},
    {"fullName":"Eric García Martínez","position":"Centre-Back","age":24,"nationality":"Spain","contractEnd":"2026-06-30"},
    {"fullName":"Pablo Páez Gavira (Gavi)","position":"Midfielder","age":21,"nationality":"Spain","contractEnd":"2030-06-30"},
    {"fullName":"Pedro González López (Pedri)","position":"Midfielder","age":22,"nationality":"Spain","contractEnd":"2026-06-30"},
    {"fullName":"Fermín López Roig","position":"Midfielder","age":22,"nationality":"Spain","contractEnd":"2029-06-30"},
    {"fullName":"Marc Casadó Riverol","position":"Midfielder","age":22,"nationality":"Spain","contractEnd":"2028-06-30"},
    {"fullName":"Daniel Olmo Carvajal","position":"Midfielder","age":27,"nationality":"Spain","contractEnd":"2030-06-30"},
    {"fullName":"Frenkie de Jong","position":"Midfielder","age":28,"nationality":"Netherlands","contractEnd":"2029-06-30"},
    {"fullName":"Marc Bernal Costa","position":"Midfielder","age":22,"nationality":"Spain","contractEnd":"2029-06-30"},
    {"fullName":"Ferran Torres Martínez","position":"Centre-Forward","age":25,"nationality":"Spain","contractEnd":"2027-06-30"},
    {"fullName":"Robert Lewandowski","position":"Centre-Forward","age":37,"nationality":"Poland","contractEnd":"2026-06-30"},
    {"fullName":"Lamine Yamal","position":"Winger","age":18,"nationality":"Spain","contractEnd":"2031-06-30"},
    {"fullName":"Raphinha (Raphaël Dias)","position":"Winger","age":28,"nationality":"Brazil","contractEnd":"2028-06-30"},
    {"fullName":"Marcus Rashford","position":"Forward","age":27,"nationality":"England","contractEnd":"2028-06-30"},
    {"fullName":"Roony Bardghji","position":"Forward","age":18,"nationality":"Sweden","contractEnd":"2029-06-30"}
  ]`;
  players: Player[] = JSON.parse(this.rawJson);
  // jersey numbers in the same order as players
  jerseyNumbers: number[] = [1, 13, 25, 3, 4, 5, 15, 18, 23, 24, 6, 8, 16, 17, 20, 21, 22, 7, 9, 10, 11, 14, 28];
}
export default App;
  

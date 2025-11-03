import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabinet',
  imports: [CommonModule, RouterModule],
  templateUrl: './cabinet.html',
  styleUrl: './cabinet.css',
})
export class Cabinet {
  title = 'Trophy Cabinet';
}

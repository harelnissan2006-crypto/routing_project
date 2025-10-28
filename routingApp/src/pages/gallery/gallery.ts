import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  images = [
    { src: '/above_campnou.jpg', alt: 'Above Camp Nou', caption: 'Above Camp Nou' },
    { src: '/campnou.jpg', alt: 'Camp Nou', caption: 'Camp Nou' },
    { src: '/new_campnou.jpg', alt: 'New Camp Nou', caption: 'New Camp Nou' },
    { src: '/montjuic-fc-barcelona-24-25.jpg', alt: 'Montjuïc FC Barcelona', caption: 'Montjuïc — 24/25' }
  ];
}

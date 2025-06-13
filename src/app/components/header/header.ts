import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule], 
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  currentDate: Date = new Date();

  constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}

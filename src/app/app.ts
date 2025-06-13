import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header'; // დაამატე
import { SidebarComponent } from './components/sidebar/sidebar'; // დაამატე

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent], // აი აქ
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'user-posts-app';
}

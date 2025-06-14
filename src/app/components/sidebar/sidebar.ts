import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  menuItems = [
    { label: 'მომხმარებლები', route: '/users' },
    { label: 'პოსტები', route: '/posts' }
  ];
}

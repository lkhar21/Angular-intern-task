import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss']
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; 
      this.userService.getUserTodos(this.userId).subscribe(data => {
        this.todos = data;
      });
    });
  }
}

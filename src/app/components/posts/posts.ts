import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './posts.html',
  styleUrls: ['./posts.scss']
})

export class PostsComponent implements OnInit {
  posts: any[] = [];
  userId: number | null = null;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

 ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const id = Number(params['userId']);
    if (!isNaN(id) && id > 0) {
      this.userId = id;
      this.userService.getUserPosts(this.userId).subscribe({
        next: data => this.posts = data,
        error: err => console.error('Error fetching posts', err)
      });
    } else {
      // თუ userId არაა, მაშინ ვიტვირთოთ ყველა პოსტი
      this.userService.getAllPosts().subscribe({
        next: data => this.posts = data,
        error: err => console.error('Error fetching all posts', err)
      });
    }
  });
}


  openPost(post: any) {
    alert(`სათაური: ${post.title}\nაღწერა: ${post.body}`);
  }
}

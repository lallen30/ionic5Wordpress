import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: any = [];

  constructor(
    private dataService: DataService,
    public authService: AuthService
    ) {
    this.getPosts();
    this.dataService.refreshPosts.subscribe(() => {
      this.getPosts();
    });
  }

  getPosts() {
    this.dataService.getData('posts').subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: any = [];

  constructor(private dataService: DataService) {
    this.dataService.getData('posts').subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  ngOnInit() {
  }

}

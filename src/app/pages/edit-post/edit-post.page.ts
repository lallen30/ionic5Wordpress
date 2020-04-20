import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {
  model: any = {};
  id;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.dataService.getData(`posts/${this.id}`).subscribe(data => {
        console.log(data);
        this.model = {
          title: data['title'].rendered,
          content: data['content'].rendered,
          status: data['status']
        };
      });
    }
  }

  onEditPost(f) {
    if (this.id) {
      // console.log(f.value);
    this.dataService.putData(`posts/${this.id}`, f.value).subscribe(data => {
      console.log(data);
      this.dataService.refreshPosts.next();
      this.router.navigateByUrl('/tabs');
    });
    } else {
      // console.log(f.value);
    this.dataService.postData('posts', f.value).subscribe(data => {
      console.log(data);
      this.dataService.refreshPosts.next();
      this.router.navigateByUrl('/tabs');
    });
    }
  }

}

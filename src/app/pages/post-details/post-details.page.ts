import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id: ', id);
    this.dataService.getData(`posts/${id}`).subscribe(data => {
      console.log('data: ', data);
      this.post = data;
    });
  }

  onDelete() {
    this.dataService.deleteData(`posts/${this.post.id}`).subscribe(data => {
      console.log(data);
      this.dataService.refreshPosts.next();
      this.router.navigateByUrl('/tabs');
    });
  }

}

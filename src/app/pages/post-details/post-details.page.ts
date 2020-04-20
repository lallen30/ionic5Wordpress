import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  post;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id: ', id);
    this.dataService.getData(`posts/${id}`).subscribe(data => {
      console.log('data: ', data);
      this.post = data;
    });
  }

}

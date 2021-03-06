import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private router: Router,
    public dataService: DataService
    ) { }

  ngOnInit() {
  }

  onLogin(f) {
    // console.log(f.value);
    this.authService.postLogin(f.value).subscribe(data => {
      //console.log(data);
      this.dataService.token = data['token'];
      this.authService.isAuthenticated.next(true);
    },
    err => {
      console.log(err.message);
      this.authService.isAuthenticated.next(false);
    });
  }

  logout() {
    this.authService.isAuthenticated.next(false);
    this.router.navigateByUrl('tabs/posts');
  }

}

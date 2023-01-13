import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth!: boolean;
  constructor(private fireauth: AngularFireAuth,private authService : AuthService) {}
  ngOnInit() {
    this.fireauth.onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        }else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.logout();
  }
}

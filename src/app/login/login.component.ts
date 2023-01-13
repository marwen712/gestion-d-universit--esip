import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string='';
  password : string ='';
  constructor(private auth : AuthService){}
  ngOnInit(): void {}
  login() {
    if(this.email=='')
    {alert('entrer votre email');
    return;}
    if(this.password=='')
    {alert('entrer votre password');
    return;}
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
  }
}

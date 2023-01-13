import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email : string='';
  password : string ='';
  constructor(private auth:AuthService) {

  }
  ngOnInit(): void {
    
  }
  register() {
    if(this.email=='')
    {alert('entrer votre email');
    return;}
    if(this.password=='')
    {alert('entrer votre password');
    return;}
    this.auth.register(this.email,this.password);
    this.email='';
    this.password='';
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private router: Router) { 
    this.checkAuth();
  }
  checkAuth() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }
}

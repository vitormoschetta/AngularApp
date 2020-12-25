import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User  

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x)    
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/login']);
  }

}

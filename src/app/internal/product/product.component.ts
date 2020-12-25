import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // currentUser: User
  // authorized: boolean = false

  // constructor(private authService: AuthService, private router: Router) { 
  //   this.authService.currentUser.subscribe(x => this.currentUser = x) 
  //   if (this.currentUser.role == "Admin")
  //     this.authorized = true
  // }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/add'])
  }

}

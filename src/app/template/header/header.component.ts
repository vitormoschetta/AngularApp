import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  
  @Output() public sidenavOpen = new EventEmitter()     
  currentUser: User     

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x)    
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  public onSidenavOpen = () => {
    this.sidenavOpen.emit()
  }

}

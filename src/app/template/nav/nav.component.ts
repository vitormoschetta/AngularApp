import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentUser: User     
  @Output() sidenavClose = new EventEmitter();

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x)    
   }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}

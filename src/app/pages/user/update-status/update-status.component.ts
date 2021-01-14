import { Component, OnInit } from '@angular/core';
import { DataResult } from 'src/app/models/dataResult';
import { User } from 'src/app/models/user';
import { NotifyService } from 'src/app/services/notify.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  lista: User[]
  dataResult: DataResult
  displayedColumns = ['username', 'role', 'active', 'action']

  constructor(
    private service: UserService,    
    private notify: NotifyService) { }

  ngOnInit(): void {
    this.lista = this.service.getAll()
  }

  ativarDesativar(username: string, active: boolean): void { 
    this.dataResult = this.service.updateStatus(username, !active) 
    this.showMessage()  
  }

  showMessage() {
    if (this.dataResult.success) {
      this.notify.ShowMessageSuccessTopCenter(this.dataResult.message, 3000)    
      this.ngOnInit()  
    }
    else
      this.notify.ShowMessageErrorTopCenter(this.dataResult.message, 3000)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { NotifyService } from 'src/app/services/notify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css', '../users.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  dataResult: DataResult
  form: FormGroup
  submitted = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private notify: NotifyService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid)
      return;

    this.userService
      .updatePassword(this.frm.password.value, this.frm.newPassword.value)
      .subscribe(
        data => {
          this.dataResult = data
          this.showMessage()
        },
        error => {
          this.notify.ShowMessageError(error, 2000)
        })
  }


  showMessage() {
    if (this.dataResult.success) {
      this.notify.ShowMessageSuccess(this.dataResult.message, 2000)
      this.clear()
    }
    else
      this.notify.ShowMessageError(this.dataResult.message, 2000)
  }


  clear() {
    this.form.reset()
    this.submitted = false
  }
  

  createForm() {
    this.form = this.fb.group({
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      newPassword: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
      newPasswordConfirm: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }

  get frm() { return this.form.controls; }
}

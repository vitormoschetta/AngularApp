import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataResult } from 'src/app/models/dataResult';
import { NotifyService } from 'src/app/services/notify.service';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css', '../user.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  dataResult: DataResult
  form: FormGroup
  formDirective: FormGroupDirective
  submitted = false


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UserService,
    private notify: NotifyService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  onSubmit(formData: any, formDirective: FormGroupDirective) {
    this.formDirective = formDirective;

    this.submitted = true;

    if (this.form.invalid)
      return;

    this.dataResult = this.service.updatePassword(this.frm.password.value, this.frm.newPassword.value)
    this.showMessage()
  }


  showMessage() {
    if (this.dataResult.success) {
      this.notify.ShowMessageSuccessTopCenter(this.dataResult.message, 3000)
      this.clear()
    }
    else
      this.notify.ShowMessageErrorTopCenter(this.dataResult.message, 3000)
  }


  clear() {
    this.submitted = false
    this.formDirective.resetForm()
    this.form.reset()
  }


  createForm() {
    this.form = this.fb.group({
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ],
      newPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ],
      newPasswordConfirm: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ]
    },
      {
        validator: MustMatch('newPassword', 'newPasswordConfirm')
      });
  }

  get frm() { return this.form.controls; }
}

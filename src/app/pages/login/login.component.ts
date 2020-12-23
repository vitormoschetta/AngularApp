import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  loading = false
  submitted = false
  returnUrl: string

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
  ) {
    // redirecionar para dashboard se já estiver logado
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {    
    this.createForm()

    // obtém o url de retorno dos parâmetros de rota ou padrão para '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }  

  onSubmit() {
    this.submitted = true

    // // reset alerts on submit
    // this.alertService.clear();
        
    if (this.form.invalid) 
      return;    

    this.loading = true;
    this.authenticationService.login(this.frm.username.value, this.frm.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
        });        
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ]
    });
  }
  
  get frm() { return this.form.controls; }
}
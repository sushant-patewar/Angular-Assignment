import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  loginForm: FormGroup;
  submitted = true;

  constructor(private formBuider: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuider.group({
      username: ['admin',Validators.required],
      password: ['admin', Validators.required]
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){

    if(this.loginForm.invalid) {
      return;
    }

    this.router.navigate(['users']);
  }

}

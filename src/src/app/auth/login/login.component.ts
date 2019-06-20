import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormControl } from '@angular/forms'; 
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:Login={
    email:"",
    password:""
  }

  email1="ramyaKrishna676@gmail.com";
  password1="ramya123";
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email,[
        Validators.required,
        Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)
      ]],
      'password': [this.user.password,[
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      ]]
  })
   }

   onSubmit(lform:FormGroup){
     //console.log("email:", this.user.email);
     alert("Login Successfull !!");
     this.router.navigate(['/customer']); 
   }
}

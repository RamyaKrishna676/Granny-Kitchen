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
  hide = true;
  email1:string;
  password1:string;
  // email1="ramyakrishna676@gmail.com";
  // password1="Ramya123";
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
    this.email1=localStorage.getItem('email');
    this.password1=localStorage.getItem('password');
    console.log("password",this.password1);

     //console.log("email:", this.loginForm.get('email').value);
    if(lform.get('email').value == this.email1 && lform.get('password').value == this.password1){
      alert("Login Successfull !!");
     this.router.navigate(['/customer']); 
    }else{
      alert("You are not the user of this website. Please Register first");
      this.router.navigate(['/signup']); 
    }
     
   }
}

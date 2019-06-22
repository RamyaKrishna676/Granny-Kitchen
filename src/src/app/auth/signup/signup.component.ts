import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms'; 
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
// import { ContactDetails } from 'src/app/class/contactDetails';
// import { Address } from '../../class/address';
// import { AddressBook } from '../../class/addressBook';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User = new User();
  hide = true;
  
  registerForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': ['',[
      Validators.required,
      Validators.minLength(6)
    ]],
    'userName': ['',[
      Validators.required,
      Validators.minLength(6)
    ]],
    'password': ['',[
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    ]],
    'contactDetails': this.formBuilder.group({
      'mobileNumber': ['',[
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      'email': ['',[
        Validators.required,
        Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)
      ]],
      'addressBook': this.formBuilder.group({
        
          'addressLine1': ['',[
            Validators.required,
          ]],
          'street': ['',[
            Validators.required
          ]],
          'city':['',[
            Validators.required
          ]],
          'pincode': ['',[
            Validators.required
          ]],
          'state': ['',[
            Validators.required
          ]]
        })
      
      })
    })
    
  }
  onSubmit(regForm:FormGroup){
    let emailInput = regForm.get('contactDetails').get('email').value;
    let passwordInput = regForm.get('password').value;
    
    // this.obj.emailElement.push(emailInput);
    // this.obj.passwordElement.push(passwordInput);
    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);
    alert("Registration Successfull !!");
    this.router.navigate(['/login']);
  }
}



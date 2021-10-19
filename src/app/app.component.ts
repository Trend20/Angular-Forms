import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  title = 'Responsive Registration Form';

  registrationFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.validateForm();
  }


  validateForm(){
    this.registrationFormGroup = this.formBuilder.group({
      emailAddress: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}

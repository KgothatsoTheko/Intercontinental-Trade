import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.scss']
})
export class StaffLoginComponent {

  constructor(private snackbar: MatSnackBar, private location: Location, private router: Router, private api: ApiService, private shared: SharedService) {}

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',Validators.required),
  })

  goBack(){
    this.location.back()
  }

  login() {
    const formdata = this.loginForm.value
    console.log(formdata);

    if(formdata.username == 'Admin01' && formdata.password == '1122') {
      this.snackbar.open('Login Succussful', 'Ok', { duration: 3000 })
      this.shared.set('session', 'currentUser', formdata)
      this.router.navigate(['/staff-home/dashboard'])
    } else {
      this.snackbar.open('Incorrect username or password. Try again', 'Ok', { duration: 3000 }) 
    }
  }

}

import { UserService } from './../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [UserService]
})
export class LoginUserComponent implements OnInit {

  username!: string;
  password!: string;
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private uService: UserService) { }

  ngOnInit(): void {
    
  }

  

  login() {
    console.log(this.username, this.password);
    console.log(this.loginForm.valid)
    this.uService.loginUser(this.username, this.password).subscribe
      data => {
        console.log(data);
      }
    console.warn(this.loginForm.value)
  }

  // onLogin() {
  //   this.uService.loginUser(this.input).subscribe(
  //     response => {
  //       console.log(response);
  //       alert('User ' + this.input.username + ' created.');
  //     },
  //     error => {
  //       console.log('error', error)
  //     }
  //   )
  // }

}

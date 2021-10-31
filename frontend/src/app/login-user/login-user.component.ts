import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [UserService]
})
export class LoginUserComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private uService: UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup ({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.uService.loginUser(this.f.username.value, this.f.password.value).subscribe
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


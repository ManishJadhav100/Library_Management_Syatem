import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css'],
  providers: [UserService]
})
export class SignupUserComponent implements OnInit {

  input: any;

  constructor(private uService: UserService) { }

  ngOnInit() {
    this.input = {
      username: '',
      password1: ''
    }
  }

  onRegister() {
    this.uService.registerUser(this.input).subscribe(
      response => {
        console.log(response);
        alert('User ' + this.input.username + ' created.');
      },
      error => {
        console.log('error', error)
      }
    )
  }

}

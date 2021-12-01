import { Component } from '@angular/core';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;

  constructor(private registerService: RegisterService) {}

  registerUser() {
    this.registerService
      .registerAPI(this.username, this.email, this.password)
      .subscribe((response) => {
        console.log(response);
      });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  async formSubmit(event: Event) {
    event.preventDefault();

    if (this.loginForm.invalid) {
      const alert = await this.alertController.create({
        message: 'Invalid information',
      });

      await alert.present();
      return;
    }

    // Destructuring (ES6)
    // const email = this.loginForm.value.email;
    // const password = this.loginForm.value.password;
    const { email, password } = this.loginForm.value;

    this.userService.login(email, password).subscribe((response) => {
      localStorage.setItem('token', response.user.token);
      this.router.navigate(['/home']);
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertController: AlertController
  ) {}

  registerUser() {
    this.userService
      .register(this.username, this.email, this.password)
      .subscribe(
        async (response) => {
          const alert = await this.alertController.create({
            message: 'Account created successfully!',
          });

          await alert.present();

          this.router.navigate(['/login']);
        },
        async () => {
          const alert = await this.alertController.create({
            message: 'Error, an unexpected error ocurred',
          });

          await alert.present();
        }
      );
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule } from '@ionic/angular';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'edit-profile',
        component: EditProfileComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, EditProfileComponent],
  imports: [IonicModule, RouterModule.forChild(routes)],
  providers: [Camera],
})
export class HomeModule {}

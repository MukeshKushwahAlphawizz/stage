import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import {NgCircleProgressModule} from "ng-circle-progress";
import {StarRatingModule} from "ionic3-star-rating";

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    NgCircleProgressModule.forRoot({
      "space": -5,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "showBackground": false,
      "clockwise": true,
    }),
    StarRatingModule
  ],
})
export class ProfilePageModule {}

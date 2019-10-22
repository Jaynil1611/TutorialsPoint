import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { FirebaseUserModel } from '../shared/user.modal';

@Injectable()
export class UserResolver implements Resolve<FirebaseUserModel> {

  constructor(public userService: UserService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<FirebaseUserModel> {

    const user = new FirebaseUserModel();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(res => {
        if (res.providerData[0].providerId === 'password') {
          user.image = '/assets/bg-01.jpg';
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        } else {
          user.image = res.photoURL;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      });
    });
  }
}

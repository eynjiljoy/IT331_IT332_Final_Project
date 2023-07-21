import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  fullname!: string;
  email!: string;
  phone!: number;
  password!: string;
  username!: string;

  constructor(private storage: Storage) {
    this.initializeStorage();
  }

  signup() {
    this.storage.set('username', this.username);
    this.storage.set('password', this.password);
    this.storage.set('fullname', this.fullname);
    this.storage.set('email', this.email);
    this.storage.set('phone', this.phone);
  }

  submit() {
    this.signup();
  }

  async initializeStorage() {
    await this.storage.create();
  }
}

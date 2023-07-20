import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  storedUsername!: string;
  storedPassword!: string;

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  logMeIn() {
    this.router.navigate(['/splash']);
  }

  ionViewDidEnter() {
    this.storage.get('username').then((storedUsername) => {
      this.storedUsername = storedUsername || '';  
    });

    this.storage.get('password').then((storedPassword) => {
      this.storedPassword = storedPassword || '';  
    });
  }
}

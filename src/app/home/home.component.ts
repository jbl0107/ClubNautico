import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  hasToken!:boolean;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.hasToken = this.auth.isLoggedIn();
  }

}

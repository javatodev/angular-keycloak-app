import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loggedUserName = '';

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.loggedUserName = this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout(window.location.origin);
  }

}

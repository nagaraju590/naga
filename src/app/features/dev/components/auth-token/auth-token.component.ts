import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'h2o-digital-manager-auth-token',
  templateUrl: './auth-token.component.html',
  styleUrls: ['./auth-token.component.scss']
})
export class AuthTokenComponent implements OnInit {
  token = 'Loading...';
  constructor(private authService: OktaAuthService) {}

  ngOnInit() {
    this.authService.getAccessToken().then((token) => {
      this.token = token;
    });
  }

}

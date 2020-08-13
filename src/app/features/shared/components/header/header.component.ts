import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { AbacusOriginationOrgUserService } from '../../services/abacus-origination-org-user.service';
import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'h2o-digital-manager-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = this.authService.isAuthenticated();
  userProfile: UserProfile = null;

  get userInitials(): string {
    if (!this.userProfile) {
      return 'UU';
    }

    const { firstName, lastName } = this.userProfile;
    let userInitials = '';

    if (firstName) {
      userInitials = firstName.charAt(0).toUpperCase();
    }

    if (lastName) {
      userInitials = `${userInitials}${lastName.charAt(0).toUpperCase()}`;
    }
    return userInitials;
  }

  constructor(
    private authService: AuthService,
    private orgUserService: AbacusOriginationOrgUserService
  ) {}

  ngOnInit() {
    this.orgUserService.getUserProfile().subscribe((userProfile) => {
      this.userProfile = userProfile;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { I18nModule } from '@app/i18n';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgbCollapseModule, I18nModule],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { navItems } from './sidebar-data';
import { NavService } from '../../../services/nav.service';
import { AuthService } from 'src/app/pages/authentication/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  navItems = navItems;
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  public readonly tokenService = inject(TokenService);

  constructor(public navService: NavService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}

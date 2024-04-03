import {Component, inject} from '@angular/core';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent} from "ng-zorro-antd/layout";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NzMenuDirective, NzMenuItemComponent} from "ng-zorro-antd/menu";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    RouterOutlet,
    NzMenuDirective,
    NzMenuItemComponent,
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  authService = inject(AuthService);
  router = inject(Router);

  handleLogOut() {
    this.authService.setIsLoggedIn(false);
    this.router.navigate(['login']);
  }
}

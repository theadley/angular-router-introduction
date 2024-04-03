import { Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {TopMangaComponent} from "./components/top-manga/top-manga.component";
import {SelectedMangaComponent} from "./components/selected-manga/selected-manga.component";
import {ReadMangaComponent} from "./components/read-manga/read-manga.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'top',
        component: TopMangaComponent
      },
      {
        path: 'manga/:slug',
        component: SelectedMangaComponent
      },
      {
        path: 'manga/:slug/chapter/:hid',
        component: ReadMangaComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', redirectTo: 'app/top', pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

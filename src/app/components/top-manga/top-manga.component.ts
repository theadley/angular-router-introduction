import {Component, inject} from '@angular/core';
import {MangaService} from "../../services/manga.service";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-manga',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './top-manga.component.html',
  styleUrl: './top-manga.component.scss'
})
export class TopMangaComponent {
  topMangaResponse$ = inject(MangaService).getTopManga();
}

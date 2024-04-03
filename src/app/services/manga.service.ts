import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TopMangaResponse} from "../models/manga";

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  httpClient = inject(HttpClient)

  getTopManga() {
    return this.httpClient.get<TopMangaResponse>('https://comick.cc/top?type=trending&comic_types=manhwa&accept_mature_content=false');
  }
}

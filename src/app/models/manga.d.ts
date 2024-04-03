export interface TopMangaResponse {
  rank: Rank[]
  recentRank: RecentRank[]
  trending: Trending
  follows: Follow[]
  news: News[]
  extendedNews: ExtendedNew[]
  completions: Completion[]
  topFollowNewComics: TopFollowNewComics
  topFollowComics: TopFollowComics
  comicsByCurrentSeason: ComicsByCurrentSeason
}

export interface Rank {
  slug: string
  title: string
  demographic?: number
  content_rating: string
  genres: number[]
  last_chapter: number
  md_covers: MdCover[]
}

export interface MdCover {
  w: number
  h: number
  b2key: string
}

export interface RecentRank {
  slug: string
  title: string
  demographic?: number
  content_rating: string
  genres: number[]
  md_covers: MdCover[]
}

export interface Trending {
  "7": TopManga[]
  "30": TopManga[]
  "90": TopManga[]
}

export interface TopManga {
  id: number
  title: string
  slug: string
  content_rating: string
  genres: number[]
  demographic?: number
  md_covers: MdCover[]
}

export interface Follow {
  created_at: string
  identities: Identities
  md_comics: MdComics
}

export interface Identities {
  id: string
  traits: Traits
}

export interface Traits {
  username: string
  id: string
  gravatar: string
}

export interface MdComics {
  id: number
  title: string
  content_rating: string
  slug: string
  follow_count: number
  demographic?: number
  genres: number[]
  md_covers: MdCover[]
}

export interface News {
  slug: string
  title: string
  demographic?: number
  genres: number[]
  content_rating: string
  created_at: string
  last_chapter: number
  md_covers: MdCover[]
}

export interface ExtendedNew {
  slug: string
  title: string
  demographic?: number
  genres: number[]
  content_rating: string
  created_at: string
  last_chapter?: number
  md_covers: MdCover[]
}

export interface Completion {
  slug: string
  title: string
  demographic?: number
  genres: number[]
  created_at: string
  uploaded_at: string
  last_chapter: number
  content_rating: string
  md_covers: MdCover[]
}

export interface TopFollowNewComics {
  "7": TopManga[]
  "30": TopManga[]
  "90": TopManga[]
}

export interface TopFollowComics {
  "7": TopManga[]
  "30": TopManga[]
  "90": TopManga[]
}

export interface ComicsByCurrentSeason {
  year: string
  season: string
  data: Daum[]
}

export interface Daum {
  title: string
  slug: string
  content_rating: string
  id: number
  genres: number[]
  user_follow_count: number
  follow_rank: number
  demographic?: number
  last_chapter: number
  desc: string
  mies?: Mies
  status: number
  created_at: string
  hid: string
  md_covers: MdCover[]
}

export interface Mies {
  ranked: any
  rating: any
  rating_count: any
  episodes?: number
  myid: number
  popularity: number
}

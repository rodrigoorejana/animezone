export interface AnimeAttributes {
    canonicalTitle: string;
    posterImage: {
      small: string;
    };
    synopsis: string;
    episodeCount: number;
    ageRatingGuide: number;
  }
  
  export interface AnimeData {
    id: string;
    attributes: AnimeAttributes;
  }
  
  export interface ApiResponse {
    data: AnimeData[];
  }
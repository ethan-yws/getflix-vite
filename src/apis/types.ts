export interface UserResponse {
  id: string;
  created_at: string;
  user_id: string;
  username: string;
}

export interface FavouriteMovieResponse {
  id: number;
  created_at: string;
  user_id: string;
  imdb_id: string;
  movie_title: string;
}

export interface IMDBRating {
  Source: string;
  Value: string;
}

export interface IMDBMovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IMDBRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response: string;
}

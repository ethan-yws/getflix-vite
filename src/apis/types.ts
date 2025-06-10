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

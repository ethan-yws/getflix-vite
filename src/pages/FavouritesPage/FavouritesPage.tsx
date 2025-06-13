import { useEffect, useState } from 'react';
import useUserStore from '../../store/useUserStore';
import { FavouriteMovieResponse } from '../../apis/types';
import { supabaseClient } from '../../apis/supabase-client';

export const FavouritesPage = () => {
  const { user_id: userId } = useUserStore((state) => state.user) || {};
  const [favourites, setFavourites] = useState<FavouriteMovieResponse[]>([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      if (!userId) return;

      const favourites = await supabaseClient.getFavouriteMovies(userId);
      setFavourites(favourites);
    };

    fetchFavourites();
  }, [userId]);

  return (
    <div>
      <h1>Your Favourites</h1>
      {favourites.length > 0 ? (
        <ul>
          {favourites.map((movie) => (
            <li key={movie.id}>{movie.movie_title}</li>
          ))}
        </ul>
      ) : (
        <p>No favourites found.</p>
      )}
    </div>
  );
};

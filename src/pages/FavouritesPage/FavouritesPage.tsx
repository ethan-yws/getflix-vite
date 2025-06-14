/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import useUserStore from '../../store/useUserStore';
import { supabaseClient, imdbApiClient } from '../../apis';
import { Spinner } from '../../ui//Spinner';
import { MovieCard } from '../../components/MovieCard';
import styled from 'styled-components';

const FavouritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  padding: 1em;
`;

export const FavouritesPage = () => {
  const { user_id: userId } = useUserStore((state) => state.user) || {};
  const [favouriteMovieDetails, setFavouriteMovieDetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchFavouritesAndDetails = async () => {
      if (!userId) return;

      const favourites = await supabaseClient.getFavouriteMovies(userId);

      if (favourites.length === 0) return;

      const favouriteMovieDetails = await Promise.all(
        favourites.map((favourite) =>
          imdbApiClient.getIMDBMovieDetails(favourite.imdb_id)
        )
      );
      setFavouriteMovieDetails(favouriteMovieDetails);
    };

    fetchFavouritesAndDetails();
  }, [userId]);

  return (
    <div>
      {favouriteMovieDetails.length === 0 && <Spinner />}
      {favouriteMovieDetails.length > 0 && (
        <FavouritesContainer>
          {favouriteMovieDetails.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              posterUrl={movie['Poster']}
              title={movie['Title']}
              releaseDate={movie['Released']}
              imdbId={movie.imdbID}
            />
          ))}
        </FavouritesContainer>
      )}
    </div>
  );
};

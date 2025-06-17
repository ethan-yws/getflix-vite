import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ActorsContainer,
  CastContainer,
  CastTitle,
  Creators,
  Details,
  DetailsContainer,
  GeneralInfo,
  OverviewContainer,
  OverviewPlot,
  OverviewTitle,
  Poster,
  Profile,
  Rating,
  Ratings,
  Title,
  Wrapper,
  IconButton,
} from './MovieDetails.styles';
import PosterNotFound from '../../assets/imageNotFound.png';
import { Spinner } from '../../ui/Spinner';
import IconFav from '../../assets/icon_fav.png';
import { supabaseClient } from '../../apis';
import useUserStore from '../../store/useUserStore';
import { imdbApiClient } from '../../apis/imdb-api-client';
import { IMDBMovieDetails } from '../../apis/types';
import { useAuth0 } from '@auth0/auth0-react';

export const MovieDetails: React.FC = () => {
  const { imdbId } = useParams<{ imdbId: string }>();
  const [details, setDetails] = useState<IMDBMovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { user_id: userId } = useUserStore((state) => state.user) || {};
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!imdbId) throw new Error('No movie ID provided');
        const data = await imdbApiClient.getIMDBMovieDetails(imdbId);
        setDetails(data);
      } catch (err) {
        setError('Failed to load movie details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [imdbId]);

  const handleFavourite = () => {
    if (!userId || !imdbId || !details) return;
    supabaseClient.addFavouriteMovie(userId, imdbId, details.Title);
  };

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {isAuthenticated && details && (
        <IconButton onClick={handleFavourite} aria-label="Add to favourites">
          <img src={IconFav} alt="Add to favourites" />
        </IconButton>
      )}
      <Wrapper>
        {loading && <Spinner />}
        {error && (
          <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
        )}
        {details && !error && (
          <>
            <DetailsContainer>
              <Poster
                alt={details.Title || 'Movie poster'}
                src={details.Poster === 'N/A' ? PosterNotFound : details.Poster}
              />
              <Details>
                <Title>
                  {details.Title} <span>({details.Year})</span>
                </Title>
                <GeneralInfo>
                  {details.Released} | {details.Genre} | {details.Runtime}
                </GeneralInfo>
                <OverviewContainer>
                  <OverviewTitle>Overview</OverviewTitle>
                  <OverviewPlot>{details.Plot}</OverviewPlot>
                </OverviewContainer>
                <Creators>
                  <Profile>
                    <span className="name">{details.Director}</span>
                    <span>Director</span>
                  </Profile>
                  <Profile>
                    <span className="name">{details.Writer}</span>
                    <span>Writer</span>
                  </Profile>
                  <Profile>
                    <span className="name">{details.Language}</span>
                    <span>Language</span>
                  </Profile>
                </Creators>
              </Details>
            </DetailsContainer>
            {/* Cast Container */}
            <CastContainer>
              <CastTitle>Top Billed Cast</CastTitle>
              <ActorsContainer>{details.Actors}</ActorsContainer>
            </CastContainer>
            {/* Ratings Container */}
            <Ratings>
              {details.Ratings &&
                Array.isArray(details.Ratings) &&
                details.Ratings.map((item) => (
                  <Rating key={item.Source}>
                    <strong>{item.Source}</strong>
                    {item.Value}
                  </Rating>
                ))}
            </Ratings>
          </>
        )}
      </Wrapper>
    </div>
  );
};

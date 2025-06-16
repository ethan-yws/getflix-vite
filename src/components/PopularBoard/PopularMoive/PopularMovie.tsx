import React, { useEffect, useState } from 'react';
import { Wrapper } from '../PopularBoard.styles';
import { Info, Poster } from './PopularMovie.styles';
import { Link } from 'react-router-dom';
import { config } from '../../../config';
import styled from 'styled-components';
import { IMDBMovieDetails } from '../../../apis/types';

const queryBaseUrl = `${config.omdb.basePath}/?apikey=${config.omdb.apiKey}&t=`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

interface IPoplarMovie {
  title: string;
}

export const PopularMovie: React.FC<IPoplarMovie> = ({ title }) => {
  const [info, setInfo] = useState<IMDBMovieDetails | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const dataRaw = await fetch(queryBaseUrl + title);
      const data: IMDBMovieDetails = await dataRaw.json();
      setInfo(data);
    };

    fetchMovie();
  }, [title]);

  return (
    <Wrapper>
      {info && (
        <>
          <Link to={`/movie/${info.imdbID}`}>
            <Poster src={info.Poster} />
          </Link>
          <StyledLink to={`/movie/${info.imdbID}`}>
            <Info>{info.Title}</Info>
          </StyledLink>
          <Info color="gray">{info.Released}</Info>
        </>
      )}
    </Wrapper>
  );
};

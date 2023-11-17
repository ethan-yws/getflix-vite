import React, { useEffect, useState } from 'react';
import {
  OMDB_API_BASE_PATH,
  OMDB_API_KEY,
} from '../../../common/constants/omdb.constant';
import { Wrapper } from '../PopularBoard.styles';
import { Info, Poster } from './PopularMovie.styles';
import { Link } from 'react-router-dom';

const queryBaseUrl = `${OMDB_API_BASE_PATH}/?apikey=${OMDB_API_KEY}&t=`;

interface IPoplarMovie {
  title: string;
}

export const PopularMovie: React.FC<IPoplarMovie> = ({ title }) => {
  const [info, setInfo] = useState<any>({});

  useEffect(() => {
    const fetchMovie = async () => {
      const dataRaw = await fetch(queryBaseUrl + title);
      const data = await dataRaw.json();

      setInfo(data);
    };

    fetchMovie();
  }, []);

  return (
    <Wrapper>
      <Link to={`/movie/${info['imdbID']}`}>
        <Poster src={info['Poster']} />
      </Link>
      <Link
        to={`/movie/${info['imdbID']}`}
        style={{ textDecoration: 'none', color: '#000' }}
      >
        <Info>{info['Title']}</Info>
      </Link>
      <Info color="gray">{info['Released']}</Info>
    </Wrapper>
  );
};

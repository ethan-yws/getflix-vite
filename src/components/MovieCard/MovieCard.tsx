import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    height: 225px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

interface MovieCardProps {
  posterUrl: string;
  title: string;
  releaseDate: string;
  imdbId: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  posterUrl,
  title,
  releaseDate,
  imdbId,
}) => {
  return (
    <Link
      to={`/movie/${imdbId}`}
      style={{ textDecoration: 'none', color: '#000' }}
    >
      <Wrapper>
        <img src={posterUrl} alt={title} />
        <h3>{title}</h3>
        <span>{releaseDate}</span>
      </Wrapper>
    </Link>
  );
};

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

  h3,
  span {
    width: 150px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0.5em 0 0 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
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
    <StyledLink to={`/movie/${imdbId}`}>
      <Wrapper>
        <img src={posterUrl} alt={title} />
        <h3>{title}</h3>
        <span>{releaseDate}</span>
      </Wrapper>
    </StyledLink>
  );
};

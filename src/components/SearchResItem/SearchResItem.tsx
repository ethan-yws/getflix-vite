import React from 'react';
import {
  InfoContainer,
  Poster,
  Wrapper,
  Image,
  Title,
  Year,
  TypeTag,
} from './SearchResItem.styles';
import PosterNotFound from '../../assets/imageNotFound.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ISearchResItem {
  title: string;
  poster: string;
  year: string;
  type: string;
  imdbId: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const SearchResItem: React.FC<ISearchResItem> = ({
  title,
  poster,
  year,
  type,
  imdbId,
}) => {
  return (
    <StyledLink to={`/movie/${imdbId}`}>
      <Wrapper>
        <Poster>
          <Image src={poster === 'N/A' ? PosterNotFound : poster} alt={title} />
        </Poster>

        <InfoContainer>
          <Title>{title}</Title>

          <Year>{year}</Year>
          <TypeTag>{type}</TypeTag>
        </InfoContainer>
      </Wrapper>
    </StyledLink>
  );
};

import React, { useState } from 'react';
import {
  Container,
  Input,
  SearchBarContainer,
  Title,
  Wrapper,
} from './SearchScene.styles';
import AvengersPoster from '../../assets/avengers-poster.jpeg';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { media } from '../../utils';

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #000;
  height: auto;

  &:hover {
    background-color: #000;
    color: #fff;
  }
  padding: 0.5em 1em;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  ${media.tablet} {
    height: 43px;
  }
`;

export const SearchScene: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<string>('');
  const { user } = useAuth0();

  const { given_name, name } = user || {};

  // handle user input
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // navigate to search result page with title to search
    navigate(`search?query=${input}`);
    setInput('');
  };

  return (
    <Wrapper $bgImage={AvengersPoster}>
      <Container>
        <Title>Welcome :) {given_name || name}</Title>
        <SearchBarContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            value={input}
            placeholder="Search for a movie..."
            onChange={(e) => setInput(e.target.value)}
          />
          <StyledButton type="submit">Search</StyledButton>
        </SearchBarContainer>
      </Container>
    </Wrapper>
  );
};

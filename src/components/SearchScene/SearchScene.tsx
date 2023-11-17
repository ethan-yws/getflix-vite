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

export const SearchScene: React.FC = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState<string>('');

  // handle user input
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // navigate to search result page with title to search
    navigate(`search?query=${input}`);
    setInput('');
  };

  return (
    <Wrapper bgimage={AvengersPoster}>
      <Container>
        <Title>Welcome :)</Title>
        <SearchBarContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            value={input}
            placeholder="Search for a movie..."
            onChange={(e) => setInput(e.target.value)}
          ></Input>
        </SearchBarContainer>
      </Container>
    </Wrapper>
  );
};

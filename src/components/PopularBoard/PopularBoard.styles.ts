import styled from 'styled-components';
import { media } from '../../utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20%;

  ${media.tablet} {
    margin: 0;
  }
`;

export const Title = styled.div`
  font-weight: 550;
  font-size: 15pt;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1em;
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 1em;

  ${media.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    flex-direction: column;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: calc((100vh - 50px) / 2); */
  margin: 0 20% 0 20%;
  /* background-color: salmon; */
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

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    flex-direction: column;
  }
`;

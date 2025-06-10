import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  /* border: 1px solid grey; */
  /* height: calc(100vh - 50px - 2em); */
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1em 0 2em 0;

  span {
    font-size: 1em;
  }
`;

export const Button = styled.button``;

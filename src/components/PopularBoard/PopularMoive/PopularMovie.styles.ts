import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
  /* object-fit: contain; */
  border-radius: 7px;
`;

export const Info = styled.div<{ color?: string }>`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 0.5em;
  color: ${(props) => (props.color ? props.color : '#000')};
`;

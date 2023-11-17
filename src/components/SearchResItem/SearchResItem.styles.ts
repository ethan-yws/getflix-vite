import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2vw;
  margin-right: 2vw;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Poster = styled.div`
  height: 141px;
  border: none;
`;

export const Image = styled.img`
  height: 141px;
  width: 94px;
  border-radius: 7px 0 0 7px; ;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  gap: 0.5em;
`;

export const Title = styled.div`
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Year = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11pt;
  color: grey;
`;

export const TypeTag = styled.div`
  font-size: 10pt;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  color: gray;
`;

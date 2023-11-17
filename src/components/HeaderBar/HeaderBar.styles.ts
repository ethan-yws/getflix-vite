import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 20pt;
  color: #fff;
  padding: 8px;
  margin-left: 1em;
  font-family: Arial, Helvetica, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

import styled from 'styled-components';
import { media } from '../../utils';

export const Wrapper = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding-right: 16px;

  .header-buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }
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

  ${media.tablet} {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;

  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div<{ bgimage: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20% 0 20%;
  height: calc((100vh - 50px) / 2);
  min-height: calc((100vh - 50px) / 2);
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${(props) => props.bgimage});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Container = styled.div`
  flex: 0;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: 'Source Sans Pro', Arial, sans-serif;
`;

export const Description = styled.h3`
  color: #fff;
  white-space: nowrap;
  font-family: 'Source Sans Pro', Arial, sans-serif;

  @media screen and (max-width: 1000px) {
    white-space: normal;
  }
`;

export const SearchBarContainer = styled.form`
  display: flex;
`;

export const Input = styled.input`
  padding: 0.5em;
  border-radius: 5px;
  border: 1px solid grey;
  width: 300px;
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
`;

export const Tag = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? '#000' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  border-radius: 10px;
  font-size: 12px;
  width: 65px;
  text-align: center;
  padding: 2px;

  :hover {
    cursor: pointer;
  }
`;

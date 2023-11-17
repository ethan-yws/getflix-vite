import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  margin-left: 2vw;
  margin-right: 2vw;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc((100vh - 50px) / 2);
  background-color: whitesmoke;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Poster = styled.img`
  height: 90%;
  width: 20%;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    height: 141px;
    width: 94px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin-left: 2em;
  margin-right: 2em;
`;

export const Title = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2em;

  @media screen and (max-width: 768px) {
    font-size: 1em;
    font-weight: 550;
  }
`;

export const GeneralInfo = styled.div`
  font-size: 11pt;
  font-family: Arial, Helvetica, sans-serif;
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const OverviewTitle = styled.div`
  font-size: 14pt;
  font-weight: 550;
  font-family: Arial, Helvetica, sans-serif;
`;

export const OverviewPlot = styled.p`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Creators = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  font-size: 10pt;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;
    margin-bottom: 1em;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;

  .name {
    font-weight: 550;
  }
`;

export const CastContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CastTitle = styled.div`
  font-size: 14pt;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 550;
  padding: 2em;
`;

export const ActorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.5em;
`;

export const Ratings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5em;
  margin-top: 1em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from 'styled-components';
import { media } from '../../utils';

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

  ${media.tablet} {
    flex-direction: column;
    height: auto;
  }
`;

export const Poster = styled.img`
  height: 90%;
  width: 20%;
  object-fit: contain;

  ${media.tablet} {
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

  ${media.tablet} {
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

  ${media.tablet} {
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

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background: rgba(116, 116, 116, 0.85);
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  z-index: 10;
  padding: 0;
  transition:
    background 0.2s,
    transform 0.2s,
    border 0.2s;

  &:hover {
    background: rgb(0, 0, 0);
    border: 1px solid #888;
    transform: scale(1.08);
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    filter: drop-shadow(0 0 2px #333) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.18));
  }
`;

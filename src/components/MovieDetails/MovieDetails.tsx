import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ActorsContainer,
  CastContainer,
  CastTitle,
  Creators,
  Details,
  DetailsContainer,
  GeneralInfo,
  OverviewContainer,
  OverviewPlot,
  OverviewTitle,
  Poster,
  Profile,
  Rating,
  Ratings,
  Title,
  Wrapper,
} from './MovieDetails.styles';
import {
  OMDB_API_BASE_PATH,
  OMDB_API_KEY,
} from '../../common/constants/omdb.constant';
import PosterNotFound from '../../assets/imageNotFound.png';

const queryBaseUrl = `${OMDB_API_BASE_PATH}/?apikey=${OMDB_API_KEY}&i=`;

export const MovieDetails: React.FC = () => {
  const { imdbId } = useParams<{ imdbId: string }>();
  const [details, setDetails] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const dataRaw = await fetch(queryBaseUrl + imdbId);
      setDetails(await dataRaw.json());
    };

    fetchData();
  }, [imdbId]);

  return (
    <Wrapper>
      <DetailsContainer>
        <Poster
          alt={details['Title']}
          src={details['Poster'] === 'N/A' ? PosterNotFound : details['Poster']}
        ></Poster>
        <Details>
          <Title>
            {details['Title']} <span>({details['Year']})</span>
          </Title>
          <GeneralInfo>
            {details['Released']} | {details['Genre']} | {details['Runtime']}
          </GeneralInfo>
          <OverviewContainer>
            <OverviewTitle>Overview</OverviewTitle>
            <OverviewPlot>{details['Plot']}</OverviewPlot>
          </OverviewContainer>
          <Creators>
            <Profile>
              <span className="name">{details['Director']}</span>
              <span>Director</span>
            </Profile>
            <Profile>
              <span className="name">{details['Writer']}</span>
              <span>Writer</span>
            </Profile>
            <Profile>
              <span className="name">{details['Language']}</span>
              <span>Language</span>
            </Profile>
          </Creators>
        </Details>
      </DetailsContainer>
      {/* Cast Container */}
      <CastContainer>
        <CastTitle>Top Billed Cast</CastTitle>
        <ActorsContainer>{details['Actors']}</ActorsContainer>
      </CastContainer>
      {/* Ratings Container */}
      <Ratings>
        {details['Ratings'] &&
          Array.isArray(details['Ratings']) &&
          details['Ratings'].map((item: any) => (
            <Rating key={item['Source']}>
              <strong>{item['Source']}</strong>
              {item['Value']}
            </Rating>
          ))}
      </Ratings>
    </Wrapper>
  );
};

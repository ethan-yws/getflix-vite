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
import { config } from '../../config';
import PosterNotFound from '../../assets/imageNotFound.png';
import { Spinner } from '../../ui/Spinner';

const queryBaseUrl = `${config.omdb.basePath}/?apikey=${config.omdb.apiKey}&i=`;

export const MovieDetails: React.FC = () => {
    const { imdbId } = useParams<{ imdbId: string }>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [details, setDetails] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const dataRaw = await fetch(queryBaseUrl + imdbId);
            setDetails(await dataRaw.json());
            setLoading(false);
        };

        fetchData();
    }, [imdbId]);

    return (
        <Wrapper>
            {loading && <Spinner />}
            {details && (
                <>
                    <DetailsContainer>
                        <Poster
                            alt={details['Title']}
                            src={
                                details['Poster'] === 'N/A'
                                    ? PosterNotFound
                                    : details['Poster']
                            }
                        ></Poster>
                        <Details>
                            <Title>
                                {details['Title']}{' '}
                                <span>({details['Year']})</span>
                            </Title>
                            <GeneralInfo>
                                {details['Released']} | {details['Genre']} |{' '}
                                {details['Runtime']}
                            </GeneralInfo>
                            <OverviewContainer>
                                <OverviewTitle>Overview</OverviewTitle>
                                <OverviewPlot>{details['Plot']}</OverviewPlot>
                            </OverviewContainer>
                            <Creators>
                                <Profile>
                                    <span className="name">
                                        {details['Director']}
                                    </span>
                                    <span>Director</span>
                                </Profile>
                                <Profile>
                                    <span className="name">
                                        {details['Writer']}
                                    </span>
                                    <span>Writer</span>
                                </Profile>
                                <Profile>
                                    <span className="name">
                                        {details['Language']}
                                    </span>
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
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            details['Ratings'].map((item: any) => (
                                <Rating key={item['Source']}>
                                    <strong>{item['Source']}</strong>
                                    {item['Value']}
                                </Rating>
                            ))}
                    </Ratings>
                </>
            )}
        </Wrapper>
    );
};

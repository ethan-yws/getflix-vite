import { render, waitFor } from '@testing-library/react';
import App from './App';
import { MovieDetails } from './pages/MovieDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ imdbId: 'someId' }),
}));

jest.mock('./config', () => ({
  config: {
    omdb: {
      basePath: 'https://www.omdbapi.com',
      apiKey: '320f6ab2', // or your test key
    },
    auth0: {
      domain: 'test-domain',
      clientId: 'test-client-id',
    },
  },
}));

const mockOMDBResponseByTitle = {
  Title: 'Halo',
  Year: '2022–',
  Rated: 'TV-MA',
  Released: '24 Mar 2022',
  Runtime: 'N/A',
  Genre: 'Action, Adventure, Sci-Fi',
  Director: 'N/A',
  Writer: 'Steven Kane, Kyle Killen',
  Actors: 'Pablo Schreiber, Natascha McElhone, Yerin Ha',
  Plot: "Aliens threaten human existence in an epic 26th-century showdown. TV series based on the video game 'Halo'.",
  Language: 'English',
  Country: 'United States',
  Awards: 'N/A',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BYzhlOTkzZDMtNDYxYS00NTY2LWJjZDEtNjI3NmE3MTI2NGU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '7.1/10',
    },
  ],
  Metascore: 'N/A',
  imdbRating: '7.1',
  imdbVotes: '9,323',
  imdbID: 'tt2934286',
  Type: 'series',
  totalSeasons: '1',
  Response: 'True',
};

const mockOMDBResponseById = {
  Title: 'Moon Knight',
  Year: '2022–',
  Rated: 'TV-14',
  Released: '30 Mar 2022',
  Runtime: 'N/A',
  Genre: 'Action, Adventure, Drama',
  Director: 'N/A',
  Writer: 'Doug Moench',
  Actors: 'Oscar Isaac, Ethan Hawke, May Calamawy',
  Plot: 'A former U.S. Marine, struggling with dissociative identity disorder, is granted the powers of an Egyptian moon god. But he soon finds out that these newfound powers can be both a blessing and a curse to his troubled life.',
  Language: 'English',
  Country: 'United States',
  Awards: 'N/A',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNGM2ZjJmZDQtNTI5MS00ZTI0LTkyNjktM2RlYWY0YTY5MTYzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '7.5/10',
    },
  ],
  Metascore: 'N/A',
  imdbRating: '7.5',
  imdbVotes: '34,305',
  imdbID: 'tt10234724',
  Type: 'series',
  totalSeasons: '1',
  Response: 'True',
};

describe('Getflix test suite', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display the home page', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockOMDBResponseByTitle),
    });

    const { getByText, getByPlaceholderText, getAllByText } = render(<App />);

    expect(getByText('GETFLIX')).toBeTruthy();
    expect(getByText('Welcome :)')).toBeTruthy();
    expect(getByPlaceholderText('Search for a movie...')).toBeTruthy();
    await waitFor(() => expect(getByText("What's Popular")).toBeTruthy());
    await waitFor(() =>
      expect(getAllByText(mockOMDBResponseByTitle.Title).length).toBe(8)
    );
  });

  it('should display the MovieDetails Page', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve(mockOMDBResponseById),
    });

    const { getByText } = render(<MovieDetails />);

    await waitFor(() =>
      expect(fetch).toHaveBeenCalledWith(
        'https://www.omdbapi.com/?apikey=320f6ab2&i=someId'
      )
    );
    await waitFor(() =>
      expect(getByText(mockOMDBResponseById.Title)).toBeTruthy()
    );
    await waitFor(() =>
      expect(getByText(mockOMDBResponseById.Plot)).toBeTruthy()
    );
  });
});

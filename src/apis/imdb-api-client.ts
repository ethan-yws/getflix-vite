import { config } from '../config';
import { IMDBMovieDetails } from './types';

const queryBaseUrl = `${config.omdb.basePath}/?apikey=${config.omdb.apiKey}`;

const getIMDBMovieDetails = async (
  imdbId: string
): Promise<IMDBMovieDetails> => {
  try {
    const response = await fetch(`${queryBaseUrl}&i=${imdbId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }
    const data: IMDBMovieDetails = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching IMDB movie details:', error);
    throw error;
  }
};

export const imdbApiClient = {
  getIMDBMovieDetails,
};

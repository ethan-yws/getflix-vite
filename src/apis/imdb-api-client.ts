/* eslint-disable @typescript-eslint/no-explicit-any */
import { config } from '../config';

const queryBaseUrl = `${config.omdb.basePath}/?apikey=${config.omdb.apiKey}`;

const getIMDBMovieDetails = async (imdbId: string): Promise<any> => {
  const response = await fetch(`${queryBaseUrl}&i=${imdbId}`);
  const data = await response.json();
  return data;
};

export const imdbApiClient = {
  getIMDBMovieDetails,
};

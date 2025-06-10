import { config } from '../config';
import { FavouriteMovieResponse, UserResponse } from './types';

const createUser = async (username: string): Promise<void> => {
  try {
    fetch(`${config.supabase.apiPath}/User`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.supabase.anonApiKey}`,
        apikey: config.supabase.anonApiKey,
      },
      body: JSON.stringify({ username }),
    });
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

const getUser = async (username: string): Promise<UserResponse[]> => {
  try {
    const response = await fetch(
      `${config.supabase.apiPath}/User?username=eq.${username}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.supabase.anonApiKey}`,
          apikey: config.supabase.anonApiKey,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

const createSuccessfulLoginTime = async (userId: string): Promise<void> => {
  try {
    await fetch(`${config.supabase.apiPath}/UserActivity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.supabase.anonApiKey}`,
        apikey: config.supabase.anonApiKey,
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    });
  } catch (error) {
    console.error('Error updating last login time:', error);
    throw error;
  }
};

const getFavouriteMovies = async (
  userId: string
): Promise<FavouriteMovieResponse[]> => {
  try {
    const response = await fetch(
      `${config.supabase.apiPath}/Favourites?user_id=eq.${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.supabase.anonApiKey}`,
          apikey: config.supabase.anonApiKey,
        },
      }
    );
    if (!response.ok) {
      throw new Error(
        `Error fetching favourite movies: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching favourite movies:', error);
    throw error;
  }
};

export const supabaseClient = {
  createUser,
  getUser,
  createSuccessfulLoginTime,
  getFavouriteMovies,
};

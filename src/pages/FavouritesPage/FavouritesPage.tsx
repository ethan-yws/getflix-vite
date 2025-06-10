import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const FavouritesPage = () => {
  const { user } = useAuth0();

  return <div>FavouritesPage</div>;
};

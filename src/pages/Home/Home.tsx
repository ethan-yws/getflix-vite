import { useEffect } from 'react';
import { PopularBoard } from '../../components/PopularBoard';
import { SearchScene } from '../../components/SearchScene';
import { Wrapper } from './Home.styles';
import { useAuth0 } from '@auth0/auth0-react';
import { supabaseClient } from '../../apis/supabase-client';

export const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const { email } = user || {};

  useEffect(() => {
    const readOrCreateUser = async (email?: string) => {
      if (isAuthenticated && email) {
        const res = await supabaseClient.getUser(email);
        if (!res.length) {
          await supabaseClient.createUser(email);
        }

        const userId = res[0].user_id;
        await supabaseClient.createSuccessfulLoginTime(userId);
      }
    };

    readOrCreateUser(email);
  }, [email, isAuthenticated]);

  return (
    <Wrapper>
      <SearchScene />
      <PopularBoard />
    </Wrapper>
  );
};

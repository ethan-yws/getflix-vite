import { useEffect } from 'react';
import { PopularBoard } from '../../components/PopularBoard';
import { SearchScene } from '../../components/SearchScene';
import { Wrapper } from './Home.styles';
import { useAuth0 } from '@auth0/auth0-react';
import { supabaseClient } from '../../apis';
import useUserStore from '../../store/useUserStore';

export const Home = () => {
  const setUser = useUserStore((state) => state.setUser);
  const { isAuthenticated, user } = useAuth0();
  const { email } = user || {};

  useEffect(() => {
    const readOrCreateUser = async (email?: string) => {
      if (isAuthenticated && email) {
        const res = await supabaseClient.getUser(email);
        if (!res.length) {
          await supabaseClient.createUser(email);

          // TODO: log last successful login time after creating the user
        }

        const { user_id: userId, username } = res[0];
        await supabaseClient.createSuccessfulLoginTime(userId);

        setUser({
          user_id: userId,
          username: username,
        });
      }
    };

    readOrCreateUser(email);
  }, [email, isAuthenticated, setUser]);

  return (
    <Wrapper>
      <SearchScene />
      <PopularBoard />
    </Wrapper>
  );
};

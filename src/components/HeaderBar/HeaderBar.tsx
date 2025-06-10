import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Logo, Wrapper, Button } from './HeaderBar.styles';

export const HeaderBar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>GETFLIX</Logo>
      </Link>
      {isAuthenticated ? (
        <>
          <span>Welcome, {user?.name}</span>
          <Button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Log Out
          </Button>
        </>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      )}
    </Wrapper>
  );
};

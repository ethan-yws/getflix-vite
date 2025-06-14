import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Logo, Wrapper, Button } from './HeaderBar.styles';
import IconFav from '../../assets/icon_fav.png';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export const HeaderBar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>GETFLIX</Logo>
      </Link>
      {isAuthenticated ? (
        <div className="header-buttons">
          <StyledLink to="/favourites" rel="noopener noreferrer">
            <img src={IconFav} alt="Favourites" />
          </StyledLink>
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
        </div>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      )}
    </Wrapper>
  );
};

import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Logo, Wrapper } from './HeaderBar.styles';

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
                    <button
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin,
                                },
                            })
                        }
                    >
                        Log Out
                    </button>
                </>
            ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
        </Wrapper>
    );
};

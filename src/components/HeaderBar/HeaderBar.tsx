import { Link } from "react-router-dom";
import { Logo, Wrapper } from "./HeaderBar.styles";

export const HeaderBar: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>GETFLIX</Logo>
      </Link>
    </Wrapper>
  );
};

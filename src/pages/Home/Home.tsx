import { PopularBoard } from "../../components/PopularBoard";
import { SearchScene } from "../../components/SearchScene";
import { Wrapper } from "./Home.styles";

export const Home = () => {
  return (
    <Wrapper>
      <SearchScene />
      <PopularBoard />
    </Wrapper>
  );
};

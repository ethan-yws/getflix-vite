import React, { useEffect, useState } from "react";
import { Wrapper } from "../PopularBoard.styles";
import { Info, Poster } from "./PopularMovie.styles";
import { Link } from "react-router-dom";
import { config } from "../../../config";

const queryBaseUrl = `${config.omdb.basePath}/?apikey=${config.omdb.apiKey}&t=`;

interface IPoplarMovie {
  title: string;
}

export const PopularMovie: React.FC<IPoplarMovie> = ({ title }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [info, setInfo] = useState<any>({});

  useEffect(() => {
    const fetchMovie = async () => {
      const dataRaw = await fetch(queryBaseUrl + title);
      const data = await dataRaw.json();

      setInfo(data);
    };

    fetchMovie();
  }, []);

  return (
    <Wrapper>
      <Link to={`/movie/${info["imdbID"]}`}>
        <Poster src={info["Poster"]} />
      </Link>
      <Link
        to={`/movie/${info["imdbID"]}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <Info>{info["Title"]}</Info>
      </Link>
      <Info color="gray">{info["Released"]}</Info>
    </Wrapper>
  );
};

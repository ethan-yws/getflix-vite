import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Pagination, Wrapper } from './SearchResPage.styles';
import { config } from '../../config';
import { SearchResItem } from '../../components/SearchResItem';
import { Spinner } from '../../ui/Spinner';
import { IMDBMovieDetails } from '../../apis/types';

const queryBaseUrl = `${config.omdb.basePath}/?apikey=${config.omdb.apiKey}&s=`;

interface SearchResponse {
  Search: IMDBMovieDetails[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export const SearchResPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const userInput = searchParams.get('query');
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pages, setPages] = useState<number>(1);

  const [info, setInfo] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const dataRaw = await fetch(
          queryBaseUrl + userInput + `&page=${pageIndex}`
        );
        if (!dataRaw.ok) throw new Error('Failed to fetch search results');
        const data: SearchResponse = await dataRaw.json();
        setInfo(data);
        setPages(Math.ceil(parseInt(data['totalResults']) / 10));
      } catch (err) {
        setError('Failed to load search results. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userInput, pageIndex]);

  const handlePreviousPage = () => {
    setPageIndex((pageIndex) => (pageIndex > 1 ? (pageIndex -= 1) : pageIndex));
  };

  const handleNextPage = () => {
    setPageIndex((pageIndex) =>
      pageIndex < pages ? (pageIndex += 1) : pageIndex
    );
  };

  return (
    <>
      {loading && <Spinner />}
      {error && (
        <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>
      )}
      <Wrapper>
        {info &&
          info.Response === 'True' &&
          Array.isArray(info.Search) &&
          info.Search.length > 0 &&
          info.Search.map((item) => (
            <SearchResItem
              key={item.imdbID}
              title={item.Title}
              poster={item.Poster}
              year={item.Year}
              type={item.Type}
              imdbId={item.imdbID}
            />
          ))}
        {/* handle error response */}
        {info && info.Response === 'False' && (
          <div>
            :\ Woops! No Result Found, Please try again with other movie titles
          </div>
        )}
        <Pagination>
          <Button onClick={handlePreviousPage}>Previous</Button>
          <span>
            {pageIndex} / {pages}
          </span>
          <Button onClick={handleNextPage}>Next Page</Button>
        </Pagination>
      </Wrapper>
    </>
  );
};

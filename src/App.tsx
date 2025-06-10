import { Home } from './pages/Home/Home';
import { HeaderBar } from './components/HeaderBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchResPage } from './pages/SearchResPage';
import { MovieDetails } from './pages/MovieDetails';
import { FavouritesPage } from './pages/FavouritesPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderBar />
        <Routes>
          <Route path="/">
            {/* Route to Index/Home page */}
            <Route index element={<Home />} />
            {/* Route to Search page */}
            <Route path="search" element={<SearchResPage />} />
            {/* Route to single movie details page */}
            <Route path="movie">
              <Route path=":imdbId" element={<MovieDetails />} />
            </Route>
            <Route path="favourites" element={<FavouritesPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

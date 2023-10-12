import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';

export const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie_details/:movieId/*" element={<MovieDetails />} />
        <Route path="*" element={<>error 404</>}/>
      </Routes>
    </main>
  );
};

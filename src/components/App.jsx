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
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route path="/goit-react-hw-05-movies/movie_details/:movieId/*" element={<MovieDetails />} />
        <Route path="*" element={<>error 404</>}/>
      </Routes>
    </main>
  );
};

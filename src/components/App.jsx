import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route
            path="/movie_details/:movieId/*"
            element={<MovieDetails />}
          />
          <Route path="*" element={<>error 404</>} />
        </Routes>
      </Suspense>
    </main>
  );
};

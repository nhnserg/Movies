import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../../routes'
import NotFound from '../NotFound/NotFound';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MoviesDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={Movies} />
          <Route path={routes.MOVIEDETAILS} element={MovieDetails}>
            <Route path={routes.CAST} element={Cast} />
            <Route path={routes.REVIEWS} element={Reviews} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Suspense>
    </Routes>
  );
};


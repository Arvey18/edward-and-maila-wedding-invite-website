import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import PageLoader from '../components/pageLoader';

// pages
const Home = lazy(() => import('../pages/home'));
const NotFound = lazy(() => import('../pages/404'));

function RoutesConfig() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default RoutesConfig;

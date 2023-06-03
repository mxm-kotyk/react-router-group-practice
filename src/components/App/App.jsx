import { Header } from 'components';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const CountrySearch = lazy(() => import('../../pages/CountrySearch'));
const Home = lazy(() => import('../../pages/Home'));
const Country = lazy(() => import('../../pages/Country'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/countrys" element={<CountrySearch />} />
          <Route path="/countrys/:countryId" element={<Country />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

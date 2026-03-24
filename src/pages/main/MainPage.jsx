import { Route, Routes } from 'react-router';
import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import ScrollToAnchor from '../../components/ScrollToAnchor';

const MainPage = () => {
  const position = 'main';

  return (
    <main>
      <div className={`${position} container`}>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/#about" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default MainPage;
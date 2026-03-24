import { Helmet } from 'react-helmet-async';
import About from '../../components/About';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <About />
    </>
  );
};

export default HomePage;
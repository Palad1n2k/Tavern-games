import { Helmet } from 'react-helmet-async';
import About from '../../components/About';
import Banner from '../../components/Banner';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <Banner />
      <About />
    </>
  );
};

export default HomePage;
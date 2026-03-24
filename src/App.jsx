import { BrowserRouter as BD } from 'react-router';
import { HelmetProvider as HP } from 'react-helmet-async';
import ConstructorPages from './pages/ConstructorPages';

const App = () => {
  return(
    <BD>
      <HP>
        <ConstructorPages />
      </HP>
    </BD>  
  );
};

export default App;
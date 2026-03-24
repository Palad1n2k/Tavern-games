import { useEffect } from 'react';
import { useLocation } from 'react-router';

function ScrollToAnchor() {
  const { hash, pathname } = useLocation();
  console.log(hash, pathname);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [hash, pathname]); 

  return null;
}

export default ScrollToAnchor;
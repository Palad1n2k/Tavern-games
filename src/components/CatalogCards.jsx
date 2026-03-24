import { useEffect, useState } from 'react';

const CatalogCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const controller = new AbortController();
  const signal = controller.signal;



try {
  const response = await fetch('https://api.example.com/data', { signal });
  const data = await response.json();
} catch (err) {
  if (err.name === 'AbortError') {
    console.log('Запрос отменен пользователем или таймаутом');
  }
}


  useEffect(() => {
    const fetchProducts = async () => {
      if (error) {
        setLoading(true)
        setError('')
      }
      
      setTimeout(() => controller.abort(), 300000);

      try {
        const response = await fetch('', );

        if (!response.ok) throw new Error(`${response.status}`);


      }      
    };

    setInterval(fetchProducts(), 600000);
  }, []);

  if (loading) return <p>Загрузка каталога...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    {}
  );
};

export default CatalogCards;
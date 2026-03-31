import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const CatalogCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Функция для загрузки данных
    const fetchProducts = async () => {
      setLoading(true);
      setError('');

      const timeoutId = setTimeout(() => controller.abort(), 300000);

      try {
        const response = await fetch('../assets/data/products.json', { signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Запрос отменён пользователем или таймаутом');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
        clearTimeout(timeoutId);
      }
    };

    fetchProducts();

    const intervalId = setInterval(fetchProducts, 600000);

    return () => {
      controller.abort();
      clearInterval(intervalId);
    };
  }, []);

  if (loading) return <p>Загрузка каталога...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default CatalogCards;

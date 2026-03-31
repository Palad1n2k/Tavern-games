import CatalogCards from './CatalogCards';
import CatalogFilter from './CatalogFilter';
import Title from './Title';

const Catalog = () => {
  const position = 'catalog';

  return (
    <section id={position}>
      <Title>Каталог</Title>
      <div className={position}>
        <CatalogFilter position={position} />
        <CatalogCards />
      </div>
    </section>
  );
};

export default Catalog;
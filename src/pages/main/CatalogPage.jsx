import { Helmet } from "react-helmet-async";
import Catalog from "../../components/Catalog";

const CatalogPage = () => {
  return (
    <>
      <Helmet>
        <meta
          httpEquiv="refrech"
          content="5"
        />
        <title>Каталог</title>
      </Helmet>
      <Catalog />
    </>
  );
};

export default CatalogPage;
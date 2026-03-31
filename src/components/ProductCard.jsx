import { Link } from "react-router";
import Button from "./Button";

const ProductCard = (props) => {
  const {
    id,
    img,
    name,
    price,
    description,
  } = props;

  const position = 'product-card';

  return (
    <article className={position}>
      <Link to={`/catalog/${id}`} className={`${position}__link`}>
        <img src={img} alt={name} className={`${position}__img`} />
        <p className={`${position}__name`}>{name}</p>
        <p className={`${position}__price`}>{price}</p>
        <p className={`${position}__description`}>{description}</p>
      </Link>
      <Button>Купить</Button>
    </article>
  );
};

export default ProductCard;
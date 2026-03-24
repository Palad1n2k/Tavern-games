import Button from "./Button";

const ProductCard = (props) => {
  const {
    img,
    name,
    price,
    description,
  } = props;

  const position = 'product-card';

  return (
    <article className={position}>
      <img src={img} alt={name} className={`${position}__img`} />
      <p className={`${position}__name`}>{name}</p>
      <p className={`${position}__price`}>{price}</p>
      <p className={`${position}__description`}>{description}</p>
      <Button>Купить</Button>
    </article>
  );
};

export default ProductCard;
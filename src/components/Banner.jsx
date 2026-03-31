import { Link } from 'react-router'

const Banner = () => {
  const position = 'banner';

  return (
    <article className={position}>
      <div className={`${position}__img`} />
      <div className={`${position}__content`}>
        <h2>Игры по доступным ценам!</h2>
        <p>Не веришь, проверь сам</p>
        <Link to="/catalog" className="button">Проверить</Link>
      </div>
    </article>
  );
};

export default Banner;
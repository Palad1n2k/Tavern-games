import Navigation from "./Navigation";

const Footer = () => {
  const position = 'footer';
  const contentLink = [
    {
      link: '#',
      content: 'Главная'
    },
    {
      link: '#',
      content: 'Каталог'
    },
    {
      link: '#',
      content: 'О нас'
    },
  ];

  return (
    <footer>
      <div className={`${position} container`}>
        <a href="">
          <img src="../logo-white.png" alt="" className={`${position}__logo`} />
        </a>
        <Navigation
          position={position}
          contentLink={contentLink}
        />
        <a href="tel:+79005003432">+7 (900) 500-34-32</a>
      </div>
    </footer>
  );
};

export default Footer;
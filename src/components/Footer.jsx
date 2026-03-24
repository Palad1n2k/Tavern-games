import LogoLink from "./LogoLink";
import Navigation from "./Navigation";

const Footer = () => {
  const position = 'footer';
  const contentLink = [
    {
      link: '/',
      content: 'Главная'
    },
    {
      link: '/#about',
      content: 'О нас'
    },
    {
      link: '/catalog',
      content: 'Каталог'
    },
  ];

  return (
    <footer>
      <div className={`${position} container`}>
        <LogoLink 
          src="logo-white.png"  
          className={`${position}__logo`} 
        />
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
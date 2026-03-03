import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer>
      <img src="" alt="" className="footer__logo" />
      <Navigation
        classNameNav="footer__nav"
        classNameUl="footer__menu"
        classNameLi="footer__menu"
        classNameLink="footer__menu-link"
        contentLink={[
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
        ]}
      />
    </footer>
  );
};

export default Footer;
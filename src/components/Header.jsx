import Button from "./Button";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <img src="" alt="" className="heder__logo" />
      <Navigation
        classNameNav="header__nav"
        classNameUl="header__menu"
        classNameLi="header__menu"
        classNameLink="header__menu-link"
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
      <div className="header_buttons">
        <Button
          onClick={() => { }}
        >
          Войти
        </Button>
        <Button
          onClick={() => { }}
        >
          Войти
        </Button>
      </div>
    </header>
  );
};

export default Header;
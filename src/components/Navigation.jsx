import { NavLink } from 'react-router';

const Navigation = (props) => {
  const {
    position,
    contentLink,
  } = props;

  return (
    <nav className={`${position}__nav`}>
      <ul className={`${position}__menu`}>
        {contentLink.map(({ link, content }, i) => {
          return (
            <li
              className={`${position}__menu-item`}
              key={i}
            >
              <NavLink
                to={link}
                className={`${position}__menu-link`}
              >
                {content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
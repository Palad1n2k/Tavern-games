const Navigation = props => {
  const {
    position,
    contentLink,
  } = props;

  return (
    <nav className={`${position}__nav`}>
      <ul className={`${position}__menu`}>
        {contentLink.map(({ link, content }) => {
          return (
            <li className={`${position}__menu-item`}>
              <a href={link} className={`${position}__menu-link`}>{content}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
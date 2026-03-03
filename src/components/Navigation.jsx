const Navigation = (props) => {
  const {
    classNameNav,
    classNameUl,
    classNameLi,
    classNameLink,
    contentLink,
  } = props;

  return (
    <nav className={classNameNav}>
      <ul className={classNameUl}>
        {contentLink.map(({link, content}) => {
          return (
            <li className={classNameLi}>
              <a href={link} className={classNameLink}>{content}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
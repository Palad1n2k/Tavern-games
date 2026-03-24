import { Link } from "react-router";

const LogoLink = (props) => {
  const {
    src,
    className='',
  } = props;

  return (
    <Link
      to="/"
    >
      <img 
        src={src} 
        alt="Лого" 
        className={className}
      />
    </Link>
  );
};

export default LogoLink;
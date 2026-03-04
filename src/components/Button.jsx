import cn from 'classnames'; // Решает проблему с потенциальным дублированием классов

const Button = (props) => {
  const {
    className,
    onClick,
    type='button',
    children,
  } = props;

  return (
    <button
      className={cn("button", className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
import cs from 'classnames';

const Button = ({
  error,
  onClick,
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className={cs(
        'px-6 py-2 text-sm md:text-base focus:outline-none rounded-md text-white',
        { 'bg-blue-500 hover:bg-blue-600': !error },
        { 'bg-red-500 hover:bg-red-600': error },
      )}>
      {children}
    </button>
  );
};

export default Button;

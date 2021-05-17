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
        'px-6 py-2 text-sm md:text-base focus:outline-none rounded-md',
        { 'bg-blue-500 hover:bg-blue-600 text-white': !error },
        {
          'bg-white-500 hover:bg-red-50 text-red-500 border border-gray-200 dark:border-gray-800 hover:bg-opacity-5':
            error,
        },
      )}>
      {children}
    </button>
  );
};

export default Button;

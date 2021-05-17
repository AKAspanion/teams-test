const Button = ({
  onClick,
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className="px-6 py-2 text-sm md:text-base focus:outline-none bg-blue-500 hover:bg-blue-600 rounded-md text-white">
      {children}
    </button>
  );
};

export default Button;

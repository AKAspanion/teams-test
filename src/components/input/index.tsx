import cs from 'classnames';

const Input = (props: InputProps) => {
  const { value, error = false, type = 'text', onInput, placeholder } = props;
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(elem) => onInput && onInput(elem.target.value)}
      className={cs(
        'p-2 px-3 h-10 md:h-12 w-full focus:outline-none focus:border-blue-500 text-sm md:text-base border text-gray-700 rounded-md',
        { 'border-red-300': error, 'border-gray-300': !error },
      )}
    />
  );
};

export default Input;

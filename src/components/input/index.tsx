import cs from 'classnames';

const Input = (props: InputProps) => {
  const {
    value,
    onInput,
    maxLength,
    placeholder,
    type = 'text',
    error = false,
  } = props;
  return (
    <input
      type={type}
      value={value}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(elem) => onInput && onInput(elem.target.value)}
      className={cs(
        'p-2 px-3 h-10 md:h-12 w-full focus:outline-none focus:border-blue-500 text-sm md:text-base border text-gray-700 rounded-md',
        'dark:bg-gray-800 dark:text-white  dark:focus:border-blue-500',
        {
          'border-red-300 dark:border-red-600': error,
          'border-gray-300 dark:border-gray-800': !error,
        },
      )}
    />
  );
};

export default Input;

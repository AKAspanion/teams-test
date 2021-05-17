const Input = (props: InputProps) => {
  const { value, onInput, placeholder } = props;
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(elem) => onInput && onInput(elem.target.value)}
      className="p-2 px-3 h-10 md:h-12 w-full focus:outline-none focus:border-blue-500 text-sm md:text-base border border-gray-300 text-gray-700 rounded-md"
    />
  );
};

export default Input;

import { AiOutlinePlus } from 'react-icons/ai';

const Heading = ({ title, subtitle, className }: HeadingProps) => {
  return (
    <div className={className}>
      <div className="flex justify-end">
        <div className="text-blue-500 cursor-pointer">
          <AiOutlinePlus size={28} />
        </div>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-white">
          {title}
        </h1>
        <p className="text-sm md:text-base font-medium text-gray-500 dark:text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Heading;

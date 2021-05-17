import cs from 'classnames';
import { AiOutlinePlus } from 'react-icons/ai';

const Heading = ({
  title,
  close,
  subtitle,
  onAction,
  className,
}: HeadingProps) => {
  return (
    <div className={className}>
      <div className="flex justify-end">
        <div
          className={cs('text-blue-500 cursor-pointer', {
            'transform rotate-45': close === true,
          })}
          onClick={() => onAction && onAction()}>
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

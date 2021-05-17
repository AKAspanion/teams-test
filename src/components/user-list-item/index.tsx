import { ImUser } from 'react-icons/im';

const UserListItem = (props: UserListItemProps) => {
  const { item, onClick } = props;
  const { firstName, lastName, email, phone, isAdmin } = item;

  const name = () => `${firstName} ${lastName}`;

  return item ? (
    <div
      onClick={() => onClick && onClick(item)}
      className="p-3 md:px-6 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 border-t border-gray-200 dark:border-gray-800 last:border-b">
      <div className="flex flex-wrap">
        <div className="mr-3 md:mr-6 mb-3 bg-gray-300 md:w-12 md:h-12 w-8 h-8 rounded-full overflow-hidden">
          <ImUser className="md:w-12 md:h-14 w-8 h-10 text-gray-100" />
        </div>
        <div>
          <h3 className="text-gray-600 dark:text-white text-sm md:text-base font-medium">
            {`${name()} ${isAdmin ? '(admin)' : ''}`.trim()}
          </h3>
          <p className="text-xs md:text-sm dark:opacity-75">{phone}</p>
          <p className="text-xs md:text-sm dark:opacity-75">{email}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserListItem;

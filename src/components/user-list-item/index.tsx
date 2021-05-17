import { ImUser } from 'react-icons/im';

const UserListItem = (props: UserListItemProps) => {
  const { item } = props;
  const { name, email, phone, isAdmin } = item;

  return item ? (
    <div className="p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 border-t border-gray-200 dark:border-gray-800 last:border-b">
      <div className="flex flex-wrap ">
        <div className="mr-4 mb-4 bg-gray-300 md:w-12 md:h-12 w-10 h-10 rounded-full overflow-hidden">
          <ImUser className="md:w-12 md:h-14 w-10 h-12 text-gray-100" />
        </div>
        <div>
          <h3 className="text-gray-600 dark:text-white font-medium">
            {`${name} ${isAdmin ? '(admin)' : ''}`.trim()}
          </h3>
          <p className="text-sm dark:opacity-75">{phone}</p>
          <p className="text-sm dark:opacity-75">{email}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserListItem;

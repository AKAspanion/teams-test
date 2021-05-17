import UserListItem from '../user-list-item';

const UserList = (props: UserListProps) => {
  const { items } = props;

  return items ? (
    <div className="py-4">
      {items.map((item, index) => (
        <UserListItem key={index} item={item} />
      ))}
    </div>
  ) : null;
};

export default UserList;

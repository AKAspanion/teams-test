import { useHistory } from 'react-router-dom';

import UserListItem from '../user-list-item';

const UserList = (props: UserListProps) => {
  const { items } = props;
  const history = useHistory();

  return items ? (
    <div className="py-3 md:py-6">
      {items.map((item, index) => (
        <UserListItem
          key={index}
          item={item}
          onClick={(item: TeamMember) => history.push(`${item.id}/edit`)}
        />
      ))}
    </div>
  ) : null;
};

export default UserList;

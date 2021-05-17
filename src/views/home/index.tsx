import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Container, Heading, UserList } from '../../components';
import { selectTeamMembers } from '../../redux/selectors';

const Home = () => {
  const history = useHistory();
  const members = useSelector(selectTeamMembers);

  return (
    <Container>
      <Heading
        title="Team members"
        className="p-3 md:p-6 pb-0 md:pb-0"
        subtitle={`You have ${members.length} team member${
          members.length > 1 ? 's' : ''
        }.`}
        onAction={() => history.push('/add')}
      />
      <UserList items={members} />
    </Container>
  );
};

export default Home;

import { Container, Heading, UserList } from '../../components';

const items = [
  {
    id: '1',
    isAdmin: true,
    name: 'Adrien Olkzac',
    phone: '123-345-322',
    email: 'adrien@abc.com',
  },
  {
    id: '1',
    isAdmin: true,
    name: 'Adrien Olkzac',
    phone: '123-345-322',
    email: 'adrien@abc.com',
  },
  {
    id: '1',
    isAdmin: true,
    name: 'Adrien Olkzac',
    phone: '123-345-322',
    email: 'adrien@abc.com',
  },
  {
    id: '1',
    isAdmin: true,
    name: 'Adrien Olkzac',
    phone: '123-345-322',
    email: 'adrien@abc.com',
  },
];

const Home = () => {
  return (
    <Container>
      <Heading
        title="Team members"
        className="p-3 md:p-6 pb-0 md:pb-0"
        subtitle="You have 3 team members."
      />
      <UserList items={items} />
    </Container>
  );
};

export default Home;

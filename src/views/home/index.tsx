import { GrAdd } from 'react-icons/gr';

import { UserList } from '../../components';

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
    <section className="h-screen">
      <div className="md:p-8 p-4 ">
        <div className="bg-white dark:bg-gray-900 rounded-md overflow-hidden">
          <div className="flex justify-end px-4 pt-4">
            <GrAdd className="cursor-pointer" size={24} />
          </div>
          <div className="px-4 pb-4">
            <h1 className="text-2xl font-medium text-gray-700 dark:text-white">
              Team members
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-white">
              You have 3 team members.
            </p>
          </div>
          <UserList items={items} />
        </div>
      </div>
    </section>
  );
};

export default Home;

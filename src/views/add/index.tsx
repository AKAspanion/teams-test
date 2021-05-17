import cs from 'classnames';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

import { Container, Heading, Button, Input } from '../../components';
import { useUserForm } from '../../hooks/useUserForm';

const Add = () => {
  const { user, setUser } = useUserForm({
    isAdmin: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  return (
    <Container>
      <Heading
        title="Add a team member"
        className="p-3 md:p-6"
        subtitle="Set email, location and role."
      />
      <div className="p-3 md:p-6 border-t">
        <div className="font-medium md:text-xl text-gray-700 pb-3 md:pb-4">
          Info
        </div>
        <div className="flex gap-3 md:gap-5 flex-col md:flex-row">
          <Input
            value={user.firstName}
            placeholder="First name"
            onInput={(v: string) => setUser('firstName', v)}
          />
          <Input
            value={user.lastName}
            placeholder="Last name"
            onInput={(v: string) => setUser('lastName', v)}
          />
        </div>
        <div className="flex gap-3 md:gap-5 pt-4 md:pt-5 flex-col md:flex-row">
          <Input
            value={user.email}
            placeholder="Email"
            onInput={(v: string) => setUser('lastName', v)}
          />
          <Input
            value={user.phone}
            placeholder="Phone"
            onInput={(v: string) => setUser('lastName', v)}
          />
        </div>
      </div>
      <div>
        <div className="font-medium md:text-xl text-gray-700 p-3 md:p-6 pb-0 md:pb-0 md:pt-2">
          Role
        </div>
        <div className="py-3 md:py-4 md:pb-6">
          <div
            onClick={() => setUser('isAdmin', false)}
            className="flex justify-between border-b border-t px-3 py-3 md:px-6 py-4   cursor-pointer">
            <p
              className={cs('pr-4 text-sm md:text-base', {
                'font-medium text-gray-600': user.isAdmin === false,
              })}>
              Regular - Can't delete members
            </p>
            <div className={cs({ 'text-blue-500': user.isAdmin === false })}>
              {!user.isAdmin ? (
                <IoMdRadioButtonOn size={20} />
              ) : (
                <IoMdRadioButtonOff size={20} />
              )}
            </div>
          </div>
          <div
            onClick={() => setUser('isAdmin', true)}
            className="flex justify-between border-b px-3 py-3 md:px-6 md:py-4 cursor-pointer">
            <p
              className={cs('pr-4 text-sm md:text-base', {
                'font-medium text-gray-600': user.isAdmin === true,
              })}>
              Admin - Can delete members
            </p>
            <div className={cs({ 'text-blue-500': user.isAdmin === true })}>
              {user.isAdmin ? (
                <IoMdRadioButtonOn size={20} />
              ) : (
                <IoMdRadioButtonOff size={20} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 md:p-6 flex justify-end">
        <Button>Save</Button>
      </div>
    </Container>
  );
};

export default Add;

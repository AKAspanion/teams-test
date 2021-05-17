import cs from 'classnames';
import uid from 'short-uuid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

import { Container, Heading, Button, Input } from '../../components';
import { addTeamMember, editTeamMember } from '../../redux/actions';
import { selectTeamMembers } from '../../redux/selectors';
import { useUserForm } from '../../hooks/useUserForm';

const Add = ({ type = 'add' }: { type?: string }) => {
  const members = useSelector(selectTeamMembers);
  const params = useParams<AppParams>();
  const dispatch = useDispatch();
  const history = useHistory();

  const { user, userValidation, setUserForm, validate } = useUserForm({
    isAdmin: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const memberFound = (key: string, value: any) =>
    members.findIndex((member: any) => member[key] === value) > -1;

  const handleClick = async () => {
    try {
      validate();

      const { firstName, email } = userValidation;

      if (email && firstName) {
        if (type === 'add') {
          if (memberFound('email', user.email)) {
            alert('Member with email id already exists');
            return;
          }

          dispatch(addTeamMember({ id: uid.generate(), ...user }));
        } else if (type === 'edit') {
          const { id } = params;

          if (memberFound('id', id)) {
            if (id) {
              dispatch(editTeamMember(id, { ...user }));
            }
          } else {
            alert('This user id doesnt exists');
          }
        }
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error adding team member');
    }
  };

  useEffect(() => {
    if (type === 'edit') {
      const { id } = params;

      if (id) {
        const memberIndex = members.findIndex(
          (member: TeamMember) => member.id === id,
        );

        if (memberIndex > -1) {
          const { firstName, lastName, email, phone, isAdmin } =
            members[memberIndex];

          setUserForm('firstName', firstName);
          setUserForm('lastName', lastName);
          setUserForm('isAdmin', isAdmin);
          setUserForm('email', email);
          setUserForm('phone', phone);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, type, members]);

  return (
    <Container>
      <Heading
        close
        className="p-3 md:p-6"
        subtitle="Set email, name, phone and role."
        title={`${type === 'add' ? 'Add' : 'Edit'} a team member`}
        onAction={() => history.push('/')}
      />
      <div className="p-3 md:p-6 border-t">
        <div className="font-medium md:text-xl text-gray-700 pb-3 md:pb-4">
          Info
        </div>
        <div className="flex gap-3 md:gap-5 flex-col md:flex-row">
          <Input
            value={user.firstName}
            placeholder="First name"
            error={userValidation.firstName === false}
            onInput={(v: string) => setUserForm('firstName', v)}
          />
          <Input
            value={user.lastName}
            placeholder="Last name"
            onInput={(v: string) => setUserForm('lastName', v)}
          />
        </div>
        <div className="flex gap-3 md:gap-5 pt-4 md:pt-5 flex-col md:flex-row">
          <Input
            value={user.email}
            placeholder="Email"
            error={userValidation.email === false}
            onInput={(v: string) => setUserForm('email', v)}
          />
          <Input
            value={user.phone}
            placeholder="Phone"
            onInput={(v: string) => setUserForm('phone', v)}
          />
        </div>
      </div>
      <div>
        <div className="font-medium md:text-xl text-gray-700 p-3 md:p-6 pb-0 md:pb-0 md:pt-2">
          Role
        </div>
        <div className="py-3 md:py-4 md:pb-6">
          <div
            onClick={() => setUserForm('isAdmin', false)}
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
            onClick={() => setUserForm('isAdmin', true)}
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
        <Button onClick={() => handleClick()}>Save</Button>
      </div>
    </Container>
  );
};

export default Add;

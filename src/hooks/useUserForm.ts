import { useState } from 'react';

export const useUserForm = (initialState: FormType) => {
  const validationObj = (state: FormType) =>
    Object.keys(state).reduce((obj, key) => {
      return { ...obj, [key]: !!state[key] };
    }, {});

  const [user, setUserState] = useState<FormType>(initialState ?? {});
  const [userValidation, setUserValidation] = useState<FormType>({});

  const setUserForm = (key: string, value: any) => {
    if (user[key] === undefined) {
      throw new Error('Invalid key');
    }

    setUserValidation((state) => ({ ...state, [key]: !!value }));

    setUserState((state) => ({ ...state, [key]: value }));
  };

  const validate = () => {
    setUserValidation((state) => ({ ...state, ...validationObj(user) }));
  };

  return { user, userValidation, setUserForm, validate };
};

import { useEffect, useState } from 'react';

type FormType = { [key: string]: any };

export const useUserForm = (initialState: FormType) => {
  const validationObj = (state: FormType) =>
    Object.keys(state).reduce((obj, key) => {
      return { ...obj, [key]: !!state[key] };
    }, {});

  const [user, setUserState] = useState<FormType>(initialState ?? {});
  const [userValidation, setUserValidation] = useState<FormType>({});

  const setUser = (key: string, value: any) => {
    if (user[key] === undefined) {
      throw new Error('Invalid key');
    }

    setUserValidation((state) => ({ ...state, [key]: !!value }));

    setUserState((state) => ({ ...state, [key]: value }));
  };

  const validate = () => {
    setUserValidation((state) => ({ ...state, ...validationObj(user) }));
  };

  useEffect(() => {
    setUserState(() => ({ ...initialState }));
    setUserValidation(() => ({}));
  }, [initialState]);

  return { user, userValidation, setUser, validate };
};

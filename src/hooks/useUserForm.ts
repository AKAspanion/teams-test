import { useState } from 'react';

type FormType = { [key: string]: any };

export const useUserForm = (initialState: FormType) => {
  const [user, setUserState] = useState<FormType>(initialState ?? {});

  const setUser = (key: string, value: any) => {
    if (user[key] === undefined) {
      throw new Error('Invalid key');
    }

    setUserState((state) => ({ ...state, [key]: value }));
  };

  return { user, setUser };
};

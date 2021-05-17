import { createStore, Store } from 'redux';
import { IS_DEVELOPMENT, STATE_TO_PERSIST, USE_LOCAL_STORE } from '../config';

import LocalStore from '../services/local-store';
import reducers from './reducers';

const WINDOW = window as any;

export const initStore = (): Promise<Store<any, any>> =>
  new Promise(async (resolve, reject) => {
    try {
      let localStore: any = await LocalStore.get('state');

      if (localStore === null) {
        localStore = undefined;
      }

      const store = createStore(
        reducers,
        localStore,
        IS_DEVELOPMENT
          ? WINDOW.__REDUX_DEVTOOLS_EXTENSION__ &&
              WINDOW.__REDUX_DEVTOOLS_EXTENSION__()
          : undefined,
      );

      if (USE_LOCAL_STORE) {
        store.subscribe(() => {
          const storeState = (STATE_TO_PERSIST ?? []).reduce((obj, key) => {
            const state: any = store.getState();
            if (state[key]) {
              return {
                ...obj,
                [key]: state[key],
              };
            }

            return obj;
          }, {});

          LocalStore.set('state', { ...storeState });
        });
      }

      resolve(store);
    } catch (error) {
      reject(error);
    }
  });

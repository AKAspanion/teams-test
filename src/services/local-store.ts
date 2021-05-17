import localforage from 'localforage';
import { LOCAL_STORE_CONFIG } from '../config';

localforage.config(LOCAL_STORE_CONFIG);

export default class LocalStore {
  public static set = (key: string, value: any, callback?: any) => {
    return localforage.setItem<any>(key, value, callback);
  };

  public static get = (key: string, callback?: any) => {
    return localforage.getItem<any>(key, callback);
  };

  public static delete = (key: string, callback?: any) => {
    return localforage.removeItem(key, callback);
  };
}

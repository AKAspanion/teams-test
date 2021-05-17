declare type ReduxAction = {
  type: string;
  payload?: any;
};

declare type UserListProps = {
  items?: any[];
};

declare type UserListItemProps = {
  item?: any;
  onClick?: Function;
};

declare type ContainerProps = {
  className?: string;
};

declare type InputProps = {
  type?: string;
  value: string;
  error?: boolean;
  maxLength?: number;
  onInput?: Function;
  placeholder?: string;
};

declare type ButtonProps = {
  error?: boolean;
  onClick?: Function;
  className?: string;
};

declare type HeadingProps = {
  title: string;
  close?: boolean;
  subtitle: string;
  onAction?: Function;
  className?: string;
};

declare type AppParams = {
  id?: string;
};

declare type TeamMember = {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  isAdmin: boolean;
};

declare type FormType = { [key: string]: any };

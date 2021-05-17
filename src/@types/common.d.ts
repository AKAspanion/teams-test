declare type ReduxAction = {
  type: string;
  payload?: any;
};

declare type UserListProps = {
  items?: any[];
};

declare type UserListItemProps = {
  item?: any;
};

declare type ContainerProps = {
  className?: string;
};

declare type InputProps = {
  type?: string;
  value: string;
  error?: boolean;
  onInput?: Function;
  placeholder?: string;
};

declare type ButtonProps = {
  onClick?: Function;
  className?: string;
};

declare type HeadingProps = {
  title: string;
  subtitle: string;
  className?: string;
};

declare type AppParams = {
  id?: string;
};

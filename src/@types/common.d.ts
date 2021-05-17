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
  value: string;
  onInput?: Function;
  placeholder?: string;
};

declare type ButtonProps = {
  className?: string;
};

declare type HeadingProps = {
  title: string;
  subtitle: string;
  className?: string;
};

import React from 'react';
import classNames from "classnames";
export enum ButtonSize {
  Larger = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}
interface IProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FunctionComponent<IProps> = (props) => {
  const {
    type,
    disabled,
    size,
    href,
    children,
  } = props;
  const classes = classNames('btn', {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'disabled': (type === ButtonType.Link) && disabled,
  });
  if (type === ButtonType.Link) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
};
Button.defaultProps = {
  disabled: false,
  type: ButtonType.Default,
  href: '',
};
export default Button;

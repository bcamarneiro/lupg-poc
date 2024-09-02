import { PropsWithChildren } from 'react';

import styles from './Button.module.css';
import clsx from 'clsx';
interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, 'border-levelup-100 dark:border-levelup-800')}
    >
      {children}
    </button>
  );
};

export default Button;

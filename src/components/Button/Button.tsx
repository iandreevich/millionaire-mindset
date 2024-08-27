import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => (
  <button
    className={styles.button}
    type='button'
    {...props}
  >
    {children}
  </button>
);

export default Button;

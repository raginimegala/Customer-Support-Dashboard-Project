import type { MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;

  type?: 'button' | 'submit' | 'reset';

  variant?: 'primary' | 'secondary' | 'danger';

  fullWidth?: boolean;

  disabled?: boolean;

  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

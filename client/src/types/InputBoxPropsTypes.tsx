import type { ChangeEventHandler } from 'react';

export interface InputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  variant?: 'primary' | 'secondary';
  type?: string;
  placeholder?: string;
}

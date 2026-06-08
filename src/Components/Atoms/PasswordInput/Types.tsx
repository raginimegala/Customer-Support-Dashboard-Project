import React from 'react';

export type PasswordInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

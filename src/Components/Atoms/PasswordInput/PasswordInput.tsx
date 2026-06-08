import { useState } from 'react';

import { IoEye, IoEyeOff } from 'react-icons/io5';

import type { PasswordInputProps } from './Types';

const PasswordInput = ({
  label,
  placeholder,
  value,
  name,
  onChange,
  required = false
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      {label && <label>{label}</label>}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full
            rounded-lg
            border
            border-slate-300
            px-4
            py-3
            pr-12
            outline-none
            placeholder:text-slate-400
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-500
          "
        >
          {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;

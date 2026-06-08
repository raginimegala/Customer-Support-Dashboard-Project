import type { InputProps } from './Types';

const Input = ({
  type = 'text',
  value,
  required = false,
  placeholder,
  onChange,
  name
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        required={required}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-slate-500"
      />
    </div>
  );
};

export default Input;

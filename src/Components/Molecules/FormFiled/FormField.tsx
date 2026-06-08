import type { FormFieldProps } from './Types';

const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;

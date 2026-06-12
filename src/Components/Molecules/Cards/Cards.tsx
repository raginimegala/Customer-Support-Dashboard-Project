import type { CardProps } from './Types';

const Card = ({ children, title, action, className = '' }: CardProps) => {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
          )}
          {action}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;

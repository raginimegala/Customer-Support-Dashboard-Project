import type { CardProps } from './Types';

const Card = ({ children, title }: CardProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm ">
      {title && (
        <h2 className="mb-4 text-lg font-semibold text-slate-800">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default Card;

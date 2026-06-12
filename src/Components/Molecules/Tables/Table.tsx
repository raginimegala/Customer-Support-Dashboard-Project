import type { TableProps } from './Types';

const Table = ({ children, className = '' }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full text-left ${className}`}>{children}</table>
    </div>
  );
};

export default Table;

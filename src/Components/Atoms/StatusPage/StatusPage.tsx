import type { StatusPageProps } from './Types';

const StatusPage = ({ status }: StatusPageProps) => {
  const statusStyle = {
    Open: 'bg-green-100 text-green-700',
    'In progress': 'bg-yellow-100 text-yellow-700',
    'On Hold': 'bg-red-100 text-red-700',
    Resolved: 'bg-purple-100 text-purple-700'
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyle[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusPage;

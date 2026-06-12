import type { PriorityBadgeProps } from './Types';

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const prioritystyles = {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-orange-100 text-orange-700',
    Low: 'bg-blue-200 text-blue-700'
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${prioritystyles[priority]}`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;

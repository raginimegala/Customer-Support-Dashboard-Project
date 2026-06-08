import type { statCardProps } from './Type';
import Card from '@/Components/Molecules/Cards';

const StatCard = ({ title, value }: statCardProps) => {
  return (
    <Card>
      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-500">{title}</p>

        <h2 className="text-3xl font-bold text-slate-800">{value}</h2>
      </div>
    </Card>
  );
};

export default StatCard;

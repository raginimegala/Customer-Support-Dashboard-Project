import { LineChart, Line, ResponsiveContainer } from 'recharts';
import type { IndividualChartProps } from './Types';
import Card from '@/Components/Molecules/Cards';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const IndividualChart = ({
  title,
  value,
  trend,
  percentage,
  chartColor,
  titleColor,
  data
}: IndividualChartProps) => {
  const TrendIcon = trend === 'up' ? FaArrowUp : FaArrowDown;
  const isPositive = trend === 'up';
  const trendColor = isPositive ? 'text-green-500' : 'text-red-500';
  return (
    <Card>
      <div className="h-12">
        <h2 className={`${titleColor} font-semibold`}>{title}</h2>
        <p>{value}</p>
        <div>{}</div>
        <span className="flex items-center gap-1">
          <TrendIcon className={trendColor} />
          <span className={trendColor}>{percentage}%</span>
          <span>from last week</span>
        </span>
      </div>
      <div className="mt-3 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="tickets"
              stroke={chartColor}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default IndividualChart;

import Card from '@/Components/Molecules/Cards';
import { useState } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const TicketsTrendChart = () => {
  const [selectedDays, setSelectedDays] = useState<'7' | '30' | '90'>('30');
  const chartData = {
    '7': [
      { day: '1', tickets: 12 },
      { day: '2', tickets: 18 },
      { day: '3', tickets: 15 },
      { day: '4', tickets: 20 },
      { day: '5', tickets: 25 },
      { day: '6', tickets: 22 },
      { day: '7', tickets: 28 }
    ],

    '30': [
      { day: '1', tickets: 12 },
      { day: '5', tickets: 18 },
      { day: '10', tickets: 15 },
      { day: '15', tickets: 22 },
      { day: '20', tickets: 19 },
      { day: '25', tickets: 28 },
      { day: '30', tickets: 25 }
    ],

    '90': [
      { day: '15', tickets: 45 },
      { day: '30', tickets: 52 },
      { day: '45', tickets: 48 },
      { day: '60', tickets: 60 },
      { day: '75', tickets: 55 },
      { day: '90', tickets: 70 }
    ]
  };
  return (
    <Card
      title="Ticket Trends"
      className="h-full"
      action={
        <select
          value={selectedDays}
          onChange={(e) => setSelectedDays(e.target.value as '7' | '30' | '90')}
          className="rounded-border px-2 py-1 text-sm"
        >
          <option value="7">7 Days</option>
          <option value="30">30 Days</option>
          <option value="90">90 days</option>
        </select>
      }
    >
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData[selectedDays as keyof typeof chartData]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="tickets"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TicketsTrendChart;

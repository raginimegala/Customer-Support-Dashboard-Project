import Card from '@/Components/Molecules/Cards';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'Open',
    value: 47
  },
  {
    name: 'In Progress',
    value: 23
  },
  {
    name: 'Resolved',
    value: 12
  },
  {
    name: 'On Hold',
    value: 8
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const TicketStatusChart = () => {
  return (
    <div className="h-full w-full">
      <Card title="Tickets by Status" className="h-full">
        <div className="flex h-72 items-center gap-2">
          <div className="h-72 w-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                >
                  {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                  <Tooltip />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {data.map((item, index) => {
              return (
                <div key={item.name} className="flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ background: COLORS[index] }}
                  />
                  <span className="text-slate-600">{item.name}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TicketStatusChart;

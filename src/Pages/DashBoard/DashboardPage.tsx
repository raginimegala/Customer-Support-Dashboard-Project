import StatCard from '@/Components/Molecules/StatCard';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

        <p className="text-slate-500">Overview of your support operations</p>
      </div>

      <div className="grid grid-cols-4 gap-10">
        <StatCard title="Total Tickets" value="1248" />

        <StatCard title="open Tickets" value="312" />

        <StatCard title="In Progress" value="194" />

        <StatCard title="Resolved" value="742" />
      </div>
    </div>
  );
};

export default DashboardPage;

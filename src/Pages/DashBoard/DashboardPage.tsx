import IndividualChart from '@/Components/Organisms/IndividualChart/IndividualChart';
import RecentTicketsCard from '@/Components/Organisms/RecentTicketsCard';
import TicketStatusChart from '@/Components/Organisms/TicketStatusChart/TicketStatusChart';
import TicketsTrendChart from '@/Components/Organisms/TicketsTrendChart/TicketsTrendChart';
import TopCustomerCard from '@/Components/Organisms/TopCustomersCard/TopCustomerCard';
import { TOTAL_TICKETS } from '@/Constants/IndividualTicketCard';
import { FaCalendarAlt } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

          <p className="text-slate-500">Overview of your support operations</p>
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <FaCalendarAlt className="text-violet-500" />
          <select
            className="
            w-full
            rounded-lg
            border
            border-slate-300
            bg-white
            px-4
            py-2
            text-sm
            shadow-sm
            sm:w-auto
          "
          >
            <option>May 12 - May 18, 2026</option>
            <option>May 19 - May 25, 2026</option>
            <option>May 26 - Jun 01, 2026</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {TOTAL_TICKETS.map((item) => (
          <IndividualChart
            key={item.title}
            title={item.title}
            value={item.value}
            percentage={item.percentage}
            trend={item.trend}
            chartColor={item.chartColor}
            titleColor={item.titleColor}
            data={item.data}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-8">
        <div className="h-full xl:col-span-5">
          <TicketsTrendChart />
        </div>
        <div className="h-full xl:col-span-3">
          <TicketStatusChart />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        <div className="xl:col-span-3">
          <RecentTicketsCard />
        </div>

        <div className="xl:col-span-1">
          <TopCustomerCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

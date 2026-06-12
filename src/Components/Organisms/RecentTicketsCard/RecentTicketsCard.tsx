import Cards from '@/Components/Molecules/Cards';
import StatusPage from '@/Components/Atoms/StatusPage/StatusPage';
import PriorityBadge from '@/Components/Atoms/PriorityBadge/PriorityBadge';
import Table from '@/Components/Molecules/Tables/index';
import { tickets } from '@/Constants/RecentTicketCard';

const RecentTicketsCard = () => {
  return (
    <div className="col-span-5 w-full">
      <Cards
        title="Recent Tickets"
        action={
          <button className="text-sm font-medium text-blue-600">
            View All
          </button>
        }
      >
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[760px] border-separate border-spacing-y-6 text-left">
            <thead>
              <tr className="text-sm text-slate-500">
                <th>ID</th>
                <th className="min-w-48">Subject</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.ID} className="border border-slate-200">
                  <td className="text-blue-500">{ticket.ID}</td>
                  <td className="min-w-48 text-slate-700">{ticket.Subject}</td>
                  <td className="text-slate-700">{ticket.Customer}</td>
                  <td className="text-slate-700">
                    <StatusPage status={ticket.Status} />
                  </td>
                  <td className="text-slate-700">
                    <PriorityBadge priority={ticket.Priority} />
                  </td>
                  <td className="text-slate-700">{ticket.UpdatedAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Cards>
    </div>
  );
};

export default RecentTicketsCard;

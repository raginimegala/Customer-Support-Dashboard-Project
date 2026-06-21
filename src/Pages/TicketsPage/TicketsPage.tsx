import RecentTicketsCard from '@/Components/Organisms/RecentTicketsCard';
import { useState } from 'react';
import { tickets } from '@/Constants/RecentTicketCard';
import TicketsTable from '@/Components/Organisms/TicketsTable/TicketsTable';

const TicketsPage = () => {
  const [status, setStatus] = useState('all');
  const [priority, setPriority] = useState('all');
  const [category, setCategory] = useState('all');

  const filteredTickets = tickets.filter((item) => {
    const matchStatus =
      status === 'all'
        ? true
        : item.Status.toLowerCase() === status.toLowerCase();
    const matchPriority =
      priority === 'all'
        ? true
        : item.Priority.toLowerCase() === priority.toLowerCase();
    const matchCategory =
      category === 'all'
        ? true
        : item.Category.toLowerCase() === category.toLowerCase();
    return matchStatus && matchPriority && matchCategory;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-10 mt-10">Tickets</h1>
      <div className="flex gap-10 mb-10 mt-10 border-b border-gray-200">
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">Status</option>
          <option value="open">Open</option>
          <option value="on hold">On Hold</option>
          <option value="resolved">resolved</option>
          <option value="in Progress">In Progress </option>
        </select>

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="all">Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Category</option>
          <option value="bug">Bug</option>
          <option value="support">Support</option>
          <option value="feature request">Feature Request</option>
        </select>
      </div>
      {/* <RecentTicketsCard /> */}
      <TicketsTable tickets={filteredTickets} />
    </div>
  );
};

export default TicketsPage;

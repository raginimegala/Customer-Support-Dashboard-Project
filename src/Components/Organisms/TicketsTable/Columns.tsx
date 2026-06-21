import { createColumnHelper } from '@tanstack/react-table';
import type { Ticket } from '../RecentTicketsCard/Types';
import StatusPage from '@/Components/Atoms/StatusPage/StatusPage';
import PriorityBadge from '@/Components/Atoms/PriorityBadge/PriorityBadge';

const columnHelper = createColumnHelper<Ticket>();

export const columns = [
  columnHelper.accessor('ID', {
    header: 'ID'
  }),

  columnHelper.accessor('Subject', {
    header: 'Subject'
  }),

  columnHelper.accessor('Customer', {
    header: 'Customer'
  }),

  columnHelper.accessor('Status', {
    header: 'Status',
    cell: (info) => <StatusPage status={info.getValue()} />
  }),

  columnHelper.accessor('Priority', {
    header: 'Priority',
    cell: (info) => <PriorityBadge priority={info.getValue()} />
  }),

  columnHelper.accessor('UpdatedAt', {
    header: 'Updated At'
  })
];

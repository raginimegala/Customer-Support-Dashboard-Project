import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';

import { columns } from './columns';
import type { Ticket } from '../RecentTicketsCard/Types';

const TicketsTable = ({ tickets }: { tickets: Ticket[] }) => {
  console.log(tickets);
  const table = useReactTable({
    data: tickets,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <table className="w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketsTable;

import type { StatusPageProps } from '@/Components/Atoms/StatusPage/Types';
import type { PriorityBadgeProps } from '@/Components/Atoms/PriorityBadge/Types';

type Ticket = {
  ID: string;
  Subject: string;
  Customer: string;
  Status: StatusPageProps['status'];
  Priority: PriorityBadgeProps['priority'];
  UpdatedAt: string;
};

export const tickets: Ticket[] = [
  {
    ID: '#1245',
    Subject: 'unable to login to account',
    Customer: 'Robert',
    Status: 'Open',
    Priority: 'High',
    UpdatedAt: '2m ago'
  },
  {
    ID: '#1246',
    Subject: 'Payment failed',
    Customer: 'John',
    Status: 'On Hold',
    Priority: 'Medium',
    UpdatedAt: '5m ago'
  },
  {
    ID: '#1247',
    Subject: 'Reset password',
    Customer: 'Alice',
    Status: 'Resolved',
    Priority: 'Low',
    UpdatedAt: '10m ago'
  },
  {
    ID: '#1248',
    Subject: 'Feature request',
    Customer: 'Bob',
    Status: 'In progress',
    Priority: 'Medium',
    UpdatedAt: '15m ago'
  }
];

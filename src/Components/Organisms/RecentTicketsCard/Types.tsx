import type { StatusPageProps } from '@/Components/Atoms/StatusPage/Types';
import type { PriorityBadgeProps } from '@/Components/Atoms/PriorityBadge/Types';

export type Ticket = {
  ID: string;
  Subject: string;
  Customer: string;
  Status: StatusPageProps['status'];
  Priority: PriorityBadgeProps['priority'];
  UpdatedAt: string;
};

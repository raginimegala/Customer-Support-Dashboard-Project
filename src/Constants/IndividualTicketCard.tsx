import type { IndividualChartProps } from '@/Components/Organisms/IndividualChart/Types';

export const TOTAL_TICKETS: IndividualChartProps[] = [
  {
    title: 'Total Tickets',
    value: 1248,
    percentage: 14,
    trend: 'up',
    chartColor: 'blue',
    titleColor: 'text-blue-500',
    data: [{ tickets: 80 }, { tickets: 5 }, { tickets: 40 }, { tickets: 90 }]
  },
  {
    title: 'Open Tickets',
    value: 312,
    percentage: 5,
    trend: 'down',
    chartColor: 'green',
    titleColor: 'text-green-500',
    data: [{ tickets: 10 }, { tickets: 90 }, { tickets: 35 }, { tickets: 60 }]
  },
  {
    title: 'Resolved',
    value: 742,
    percentage: 18,
    trend: 'up',
    chartColor: 'orange',
    titleColor: 'text-orange-500',
    data: [{ tickets: 15 }, { tickets: 12 }, { tickets: 18 }, { tickets: 20 }]
  },
  {
    title: 'In Progress',
    value: 194,
    percentage: 3,
    trend: 'up',
    chartColor: 'violet',
    titleColor: 'text-violet-500',
    data: [{ tickets: 25 }, { tickets: 30 }, { tickets: 35 }, { tickets: 40 }]
  }
];

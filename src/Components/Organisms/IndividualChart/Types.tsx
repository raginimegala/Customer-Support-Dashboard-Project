export type IndividualChartProps = {
  title: string;
  value: number;
  trend: 'up' | 'down';
  percentage: number;
  chartColor: string;
  titleColor: string;
  data: Array<{ tickets: number }>;
};

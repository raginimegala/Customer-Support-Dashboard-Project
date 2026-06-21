export const getRecentTickets = async () => {
  return [
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
};

import {
  FaHome,
  FaTicketAlt,
  FaUsers,
  FaRegChartBar,
  FaBook,
  FaTools,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';

export const MAIN_MENU = [
  {
    label: 'Dashboard',
    icon: FaHome,
    path: '/dashboard'
  },
  {
    label: 'Tickets',
    icon: FaTicketAlt,
    path: '/tickets'
  },
  {
    label: 'Customers',
    icon: FaUsers,
    path: '/customers'
  },
  {
    label: 'Reports',
    icon: FaRegChartBar,
    path: '/reports'
  },
  {
    label: 'Knowledge Base',
    icon: FaBook,
    path: '/knowledge-base'
  }
];

export const SETTINGS_MENU = [
  {
    label: 'Users',
    path: '/users',
    icon: FaUsers
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: FaTools
  }
];

export const FOOTER_MENU = [
  {
    label: 'User',
    path: '/user',
    icon: FaUser
  },
  {
    label: 'Log out',
    path: '/logout',
    icon: FaSignOutAlt
  }
];

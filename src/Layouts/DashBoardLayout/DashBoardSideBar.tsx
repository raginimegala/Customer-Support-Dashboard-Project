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

import logo from '@/assets/colorlogo.png';

function DashBoardSideBar() {
  return (
    <aside className="flex h-screen w-64 flex-col justify-between bg-slate-900 p-5 text-white">
      <h1 className="mb-6 flex items-center gap-3 text-xl font-bold">
        <a href="/">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </a>
        Support Pro
      </h1>
      <nav className="flex flex-col space-y-8">
        <a href="/Dashboard" className="flex items-center gap-3">
          <FaHome /> <span>Dashboard</span>
        </a>
        <a href="/tickets" className="flex items-center gap-3">
          <FaTicketAlt /> <span>Tickets</span>
        </a>
        <a href="/customer" className="flex items-center gap-3">
          <FaUsers /> <span>Customers</span>
        </a>
        <a href="/reports" className="flex items-center gap-3">
          <FaRegChartBar /> <span>Reports</span>
        </a>
        <a href="/knowledgeBase" className="flex items-center gap-3">
          <FaBook /> <span>Knowledge Base</span>
        </a>
      </nav>
      <div className="mt-8 border-t border-slate-700 pt-8">
        <nav className="flex flex-col space-y-8">
          <a href="/users" className="flex items-center gap-3">
            <FaUsers /> <span>Users</span>
          </a>
          <a href="/settings" className="flex items-center gap-3">
            <FaTools /> <span>Settings</span>
          </a>
        </nav>
      </div>
      <footer className="border-t border-slate-700 pt-8">
        <nav className="flex flex-col space-y-8">
          <a href="/user" className="flex items-center gap-3">
            <FaUser /> <span>User</span>
          </a>
          <a href="/logout" className="flex items-center gap-3">
            <FaSignOutAlt /> <span>Log out</span>
          </a>
        </nav>
      </footer>
    </aside>
  );
}

export default DashBoardSideBar;

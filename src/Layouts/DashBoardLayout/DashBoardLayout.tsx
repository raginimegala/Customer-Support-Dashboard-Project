import { Outlet } from 'react-router-dom';

import DashBoardSideBar from './DashBoardSideBar';
import DashboardHeader from './DashboardHeader';

const DashBoardLayout = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <DashBoardSideBar />

        <div className="flex flex-1 flex-col">
          <DashboardHeader />

          <main className="flex-1 bg-slate-100 p-5">
            <h2>Dashboard</h2>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;

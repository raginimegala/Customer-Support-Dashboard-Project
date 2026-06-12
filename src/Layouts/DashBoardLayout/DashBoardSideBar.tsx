import { NavLink } from 'react-router-dom';
import { MAIN_MENU, SETTINGS_MENU, FOOTER_MENU } from '@/Constants/SideBar';

import logo from '@/assets/colorlogo.png';

function DashBoardSideBar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 p-5 text-white">
      <h1 className="mb-8 flex items-center gap-3 text-xl font-bold">
        <a href="/">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </a>
        Support Pro
      </h1>
      <nav className="flex flex-col space-y-8">
        {MAIN_MENU.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `flex items-center ${isActive ? 'bg-blue-800' : 'hover:bg-blue-300  '}`
              }
            >
              <Icon />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-8 border-t border-slate-700 pt-8 space-y-6">
        <nav className="flex flex-col space-y-10">
          {SETTINGS_MENU.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                to={item.path}
                key={item.path}
                className={({ isActive }) =>
                  `flex items-center ${isActive ? 'bg-blue-800' : 'hover:bg-blue-300'}`
                }
              >
                <Icon />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
      <footer className="mt-auto border-t border-slate-700 pt-8">
        <nav className="flex flex-col space-y-4 gap-6">
          {FOOTER_MENU.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                to={item.path}
                key={item.path}
                className={({ isActive }) =>
                  `flex items-center ${isActive ? 'bg-blue-800' : 'hover:bg-blue-300'}`
                }
              >
                <Icon />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </footer>
    </aside>
  );
}

export default DashBoardSideBar;

import { FaSearch, FaBell, FaQuestionCircle, FaUser } from 'react-icons/fa';

function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-5">
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          className="rounded-lg border border-slate-300 px-3 py-2 outline-none w-75 pl-10"
          type="text"
          placeholder="Search tickets, customers"
        />
      </div>
      <div className="flex items-center gap-4">
        <div>
          <h4>
            <FaBell />
          </h4>
        </div>
        <div>
          <h5>
            <FaQuestionCircle />
          </h5>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-300">
          <h6>
            <FaUser />
          </h6>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;

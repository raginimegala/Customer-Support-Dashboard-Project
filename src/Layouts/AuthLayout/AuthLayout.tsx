import { Outlet } from 'react-router-dom';

import banner from '@/assets/banner_left.png';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden h-screen w-1/2 lg:block">
        <img
          src={banner}
          alt="banner"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-center bg-white lg:w-1/2">
        <div className="w-full max-w-md p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

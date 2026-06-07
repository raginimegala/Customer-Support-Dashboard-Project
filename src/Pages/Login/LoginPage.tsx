import logo from '@/assets/colorlogo.png';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-8">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <img src={logo} alt="Logo" className="h-16 w-16" />
        </div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Welcome back!
          </h1>
          <p className="text-slate-600">Please sign in to continue</p>
        </div>
      </div>

      <form>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="text"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none placeholder:text-slate-400 focus:border-slate-500"
          />
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-12 outline-none placeholder:text-slate-400 focus:border-slate-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>
        <div className="w-full space-y-3">
          <div className="flex justify-end">
            <label className="flex items-center gap-2 text-sm text-slate-600">
              Remember me
              <input type="checkbox" />
            </label>
          </div>

          <button type="button" className="text-sm font-medium text-blue-600">
            Forgot Password?
          </button>
        </div>
        <div className="space-y-4">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-slate-700"
          >
            Sign in
          </button>
          <div className="text-center">
            <p>
              Dont have an account?{' '}
              <a href="#" className="text-blue-600">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

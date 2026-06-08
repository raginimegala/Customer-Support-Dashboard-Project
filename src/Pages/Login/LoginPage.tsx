import logo from '@/assets/colorlogo.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/Routes/RoutesPath';
import Input from '@/Components/Atoms/Input/Index';
import PasswordInput from '@/Components/Atoms/PasswordInput';

import Button from '@/Components/Atoms/Buttons';

const LoginPage = () => {
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
          <Input label="email" type="text" placeholder="you@example.com" />
          <PasswordInput label="Password" placeholder="Enter your password" />
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
          <Button type="submit" fullWidth>
            Sign in
          </Button>
          <div className="text-center">
            <p>
              Dont have an account?{' '}
              <Link to={ROUTES.SIGNUP} className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

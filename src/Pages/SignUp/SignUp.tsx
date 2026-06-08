import FormField from '@/Components/Molecules/FormFiled';
import Input from '@/Components/Atoms/Input/Index';
import Button from '@/Components/Atoms/Buttons';
import PasswordInput from '@/Components/Atoms/PasswordInput';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600 text-center">Sign Up</h1>
      <p className="text-gray-600 text-center">
        Create your account to get started
      </p>
      <form className="space-y-4">
        <FormField label="First Name">
          <Input type="text" placeholder="First Name" />
        </FormField>
        <FormField label="Email">
          <Input type="email" placeholder="you@example.com" />
        </FormField>
        <FormField>
          <PasswordInput placeholder="Password" />
        </FormField>
        <FormField>
          <PasswordInput placeholder="Confirm password" />
        </FormField>
        <Button fullWidth>Create Account</Button>
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;

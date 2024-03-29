import AuthForm from '~/components/auth/authForm';

import authStyles from '~/styles/auth.css';

export default function AuthPage() {
  return <AuthForm />;
}

export function links() {
  return [{ rel: 'stylesheet', href: authStyles }];
}

import { useAuth0 } from '@auth0/auth0-react';

export default function LoginPage() {
  const { loginWithRedirect, isLoading, error } = useAuth0();

  if (error) return <p>Error: {error.message}</p>;

  return (
    <button onClick={() => loginWithRedirect()} disabled={isLoading}>
      {isLoading ? 'Loading…' : 'Log In'}
    </button>
  );
}

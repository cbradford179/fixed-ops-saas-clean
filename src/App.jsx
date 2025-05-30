import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './pages/Login';

export default function App() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div>
      {/* Your normal app UI here */}
      <h1>Welcome back!</h1>
    </div>
  );
}

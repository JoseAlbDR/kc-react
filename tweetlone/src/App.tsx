import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { isLogged } = useAuthContext();

  return <div>{isLogged ? <TweetsPage /> : <LoginPage />}</div>;
}

export default App;

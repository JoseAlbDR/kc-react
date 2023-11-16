import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import { useState } from 'react';

function App({ initiallyLogged }: { initiallyLogged: boolean }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  return (
    <div>
      {isLogged ? (
        <TweetsPage onLogout={setIsLogged} />
      ) : (
        <LoginPage onLogin={setIsLogged} />
      )}
    </div>
  );
}

export default App;

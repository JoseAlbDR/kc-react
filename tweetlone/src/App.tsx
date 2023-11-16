import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import { useState } from 'react';
function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("accessToken"));

  return (
    <div>{isLogged ? <TweetsPage /> : <LoginPage onLogin={setIsLogged} />}</div>
  );
}

export default App;

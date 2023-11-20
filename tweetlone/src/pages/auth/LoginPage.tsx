import { useState } from 'react';

import { login } from './service';
import { useAuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({ username: '', password: '' });

  const { toggleLogged } = useAuthContext();

  const disabled = !(credentials.username && credentials.password);

  const handleCredentials = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setCredentials({ ...credentials, [type]: e.target.value });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await login({
      ...credentials,
    });

    toggleLogged(true);
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => handleLogin(e)}>
        <h1>Log in to Twitter</h1>
        <div className="form-row">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            className="form-input"
            type="text"
            name="username"
            defaultValue={credentials.username}
            onChange={(e) => handleCredentials(e, 'username')}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            defaultValue={credentials.password}
            onChange={(e) => handleCredentials(e, 'password')}
          />
        </div>
        <button className="btn" disabled={disabled}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

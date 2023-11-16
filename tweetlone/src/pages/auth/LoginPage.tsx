import { Dispatch, SetStateAction, useState } from 'react';

import { login } from './service';
import { setAuthorizationHeader } from '../../api/client';

const LoginPage = ({
  onLogin,
}: {
  onLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
  }>({ username: '', password: '' });

  const disabled = !(credentials.username && credentials.password);

  const handleCredentials = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setCredentials({ ...credentials, [type]: e.target.value });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { accessToken } = await login({
      ...credentials,
    });

    onLogin(true);

    localStorage.setItem('accessToken', accessToken);
    setAuthorizationHeader(accessToken);
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

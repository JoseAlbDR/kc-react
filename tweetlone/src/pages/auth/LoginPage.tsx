import { Dispatch, SetStateAction, useRef, useState } from 'react';

import { login } from './service';
import { setAuthorizationHeader } from '../../api/client';

const LoginPage = ({
  onLogin,
}: {
  onLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const disabled = !(username && password);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { accessToken } = await login({
      username: username,
      password: password,
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
            defaultValue={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
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
            defaultValue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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

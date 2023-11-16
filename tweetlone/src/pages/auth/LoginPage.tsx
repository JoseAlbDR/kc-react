import { Dispatch, SetStateAction, useRef } from 'react';

import { login } from './service';
import { setAuthorizationHeader } from '../../api/client';

const LoginPage = ({
  onLogin,
}: {
  onLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (usernameRef.current && passwordRef.current) {
      const { accessToken } = await login({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });

      onLogin(true);

      localStorage.setItem('accessToken', accessToken);
      setAuthorizationHeader(accessToken);
    }
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
            ref={usernameRef}
            className="form-input"
            type="text"
            name="username"
            defaultValue="user"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            className="form-input"
            type="password"
            name="password"
            defaultValue="secret"
          />
        </div>
        <button className="btn">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;

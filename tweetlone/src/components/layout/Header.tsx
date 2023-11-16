import logo from '../../assets/Logo_of_Twitter.svg';
import { logout } from '../../pages/auth/service';
import { Dispatch, SetStateAction } from 'react';

const Header = ({
  onLogout,
  isLogged,
}: {
  onLogout: Dispatch<SetStateAction<boolean>>;
  isLogged: boolean;
}) => {
  const handleLogout = async () => {
    await logout();
    onLogout(false);
  };

  return (
    <header className="flex justify-between items-center w-full">
      <div>
        <img src={logo} width={32} height={32} />
      </div>
      <nav>
        {!isLogged ? (
          <button className="btn">Login</button>
        ) : (
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;

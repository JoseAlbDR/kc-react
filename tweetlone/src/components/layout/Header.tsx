import logo from '../../assets/Logo_of_Twitter.svg';
import { useAuthContext } from '../../context/AuthContext';
import { logout } from '../../pages/auth/service';

const Header = () => {
  const { toggleLogged, isLogged } = useAuthContext();

  const handleLogout = async () => {
    await logout();
    toggleLogged(false);
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

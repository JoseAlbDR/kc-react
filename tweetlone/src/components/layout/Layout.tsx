import Footer from './Footer';
import Header from './Header';
import { ReactNode, Dispatch, SetStateAction } from 'react';

const Layout = ({
  title,
  children,
  ...rest
}: {
  title: string;
  isLogged: boolean;
  onLogout: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  return (
    <div className="w-full">
      <Header {...rest} />
      <main>
        <h2>{title}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

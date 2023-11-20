import Footer from './Footer';
import Header from './Header';
import { ReactNode } from 'react';

const Layout = ({
  title,
  children,
}: {
  title: string;

  children: ReactNode;
}) => {
  return (
    <div className="w-full">
      <Header />
      <main>
        <h2>{title}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

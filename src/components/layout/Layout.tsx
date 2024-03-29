import { ReactNode } from 'react';
import styles from './Layout.module.scss';
import {Footer, Navbar, Header} from "../index";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <div {...props}>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.main}>
          <Header />
          <main>
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

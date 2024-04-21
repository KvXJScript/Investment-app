import { ReactNode } from "react";
import { Footer, Navbar, Header } from "../index";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <div {...props}>
      <div className="flex">
        {/*<Navbar />*/}
        <div className="flex flex-1 flex-col min-h-screen">
          <Header />
          <main className="m-12">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

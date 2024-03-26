import styles from "./Layout.module.scss";
import { Navbar, Header, Footer } from "../components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Layout({ children }) {
  const navigate = useNavigate();
  const storedData = localStorage.getItem("access_token");

  useEffect(() => {
    if (!storedData) {
      navigate("/login");
    }
  }, [storedData, navigate]);

  if (!storedData) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div>
        <Header />
        <main className={styles.main}>
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}

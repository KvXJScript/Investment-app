import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { icon: <></>, label: "Home", href: "/" },
  { icon: <></>, label: "Events", href: "/calendar" },
  { icon: <></>, label: "Ticket", href: "/ticket" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [currentURL, setCurrentURL] = useState();

  useEffect(() => {
    if (window) {
      const currentURL = new URL(window.location.href).origin;
      setCurrentURL(currentURL as any);
    }
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>Image</div>
      <div style={{ width: "101%" }}>
        <ul className={styles.list}>
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                className={styles.link}
                to={currentURL + "/" + item.href.substring(1)}
              >
                {item.icon}
                <p>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactImage}>Contact image</div>
        <h4>Contact with us</h4>
        <p>Please take a note to is if you have any questions?</p>
        <i>Investment@gmail.com</i>
      </div>
    </div>
  );
};

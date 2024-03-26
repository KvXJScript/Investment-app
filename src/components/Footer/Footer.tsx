import styles from "./Footer.module.scss";
import { FC } from "react";
import Icon from "@/app/assets/icons/logo.png";
import Facebook from "@/app/assets/icons/facebook.png";
import Instagram from "@/app/assets/icons/instagram.png";
import Twitter from "@/app/assets/icons/twitter.png";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.row}>
        <div style={{ alignSelf: "center" }}>
          <Icon />
          <b>Zoo Admin Portal</b>
        </div>
        <div>
          <h5>Zoo admin portal main app for management solution in region</h5>
          <p className={styles.description}>
            Zoo Admin Portal is an advanced administrative tool created for zoo
            managers. The portal enables efficient management of all aspects of
            zoo operations, providing full control and transparency
          </p>
        </div>
        <div>
          <p>Follow us</p>
          <div className={styles.iconContainer}>
            <div>
              <Facebook />
            </div>
            <div>
              <Instagram />
            </div>
            <div>
              <Twitter />
            </div>
          </div>
        </div>
        <div>
          <p>Call us</p>
          <b>123 456 789</b>
        </div>
      </section>
      <div className={styles.subFooter}>
        <div className={styles.line}></div>
        <p>© Investment App, Paweł Roj, All Right Reserved</p>
      </div>
    </footer>
  );
};

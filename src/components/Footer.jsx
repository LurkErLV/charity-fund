import { t } from "../languages/translations";
import styles from "./styles/Footer.module.css";

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <h1 className={styles.title}>Промінь нації</h1>
                <div className={styles.bar}></div>
                <h2 className={styles.title}>© 2023 PROMIN</h2>
            </div>
            <div className={styles.right}>
                <a href="mailto:support@promin.ua" className={styles.email}>support@promin.ua</a>
            </div>
        </footer>
    );
}

export default Footer;

import {t} from "../languages/translations";
import styles from "./styles/Hotline.module.css";

function Hotline(props) {
    return (
        <div className={styles.hotline}>
            <h1 className={styles.title}>{t(props.lang, "hotline")}</h1>
            <a href="tel:+380995547953" className={styles.phoneNumber}>
                <h1 className={styles.number}>+380 99 554 7953</h1>
                <span className={styles.phoneIcon}></span>
            </a>
        </div>
    );
}

export default Hotline;

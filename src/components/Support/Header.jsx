import {t} from "../../languages/translations";
import styles from "../styles/SupportHeader.module.css";

function Header(props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{ t(props.lang, "support") }</h1>
            <p className={styles.description}>{ t(props.lang, "helpUsWithDonations") }</p>
        </header>
    );
}

export default Header;

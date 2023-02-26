import {t} from "../../languages/translations";
import styles from "../styles/RequestHeader.module.css";

function Header(props) {
    return (
        <header className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <h1 className={styles.title}>{t(props.lang, "requestForHelp")}</h1>
                    <p className={styles.description}>{t(props.lang, "hereYouCanRequestHelp")}</p>
                </div>
                <a className={styles.download} href="/" download>{t(props.lang, "downloadSampleDocs")}</a>
            </div>
        </header>
    );
}

export default Header;

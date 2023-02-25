import {t} from "../../languages/translations";
import styles from "../styles/Header.module.css";

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>{ t(props.lang, "charityFund") }</h2>
                    <h1 className={styles.name}>{ t(props.lang, "name") }</h1>
                    <a className={styles.support} href="">{ t(props.lang, "support") }</a>
                </div>

                <div className={styles.withUsBlock}>
                    <span className={styles.gerb}></span>
                    <div className={styles.withUsText}>
                        <h2 className={styles.title}>{ t(props.lang, "withUsAlready") }</h2>
                        <div className={styles.amount}>
                            <span className={styles.usersIcon}></span>
                            <h1 className={styles.number}>{ t(props.lang, "amount") }</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

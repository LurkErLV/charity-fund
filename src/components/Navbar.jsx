import {useEffect, useState} from 'react';
import {t} from "../languages/translations";
import styles from "./styles/Navbar.module.css";

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    function changeLang() {
        let url = window.location.pathname;
        const newLang = props.lang === "ua" ? "en" : "ua";

        return `/${newLang}${url.slice(3)}`;
    }

    return (
        <>
            <nav className={styles.navbar}>
                <a href={`/${props.lang}`} className={styles.title}>{t(props.lang, "name")}</a>
                <button className={isOpen ? styles.openBurger : styles.closeBurger} style={{display: "none"}} onClick={() => setIsOpen(!isOpen)}><span className={isOpen ? styles.openBurgerIcon : styles.closeBurgerIcon}></span></button>
                <div className={`${styles.links} ${isOpen ? styles.openMenu : styles.closeMenu}`}>
                    <a href={`/${props.lang}`} className={`${styles.link} ${styles.active}`}>{t(props.lang, "main")}</a>
                    <a href={`/${props.lang}#${t(props.lang, "collecting")}`} className={styles.link}>{t(props.lang, "collecting")}</a>
                    <a href={`/${props.lang}#${t(props.lang, "reporting")}`} className={styles.link}>{t(props.lang, "reporting")}</a>
                    <a href={`/${props.lang}/support`} className={styles.link}>{t(props.lang, "requisites")}</a>
                    <a href={`/${props.lang}#+380 99 554 7953`} className={styles.link}>{t(props.lang, "contacts")}</a>
                    <a href={`/${props.lang}#${t(props.lang, "faq")}`} className={styles.link}>{t(props.lang, "faq")}</a>

                    <div className={isOpen ? styles.openButtons : styles.closeButtons} style={{display: !isOpen ? "none" : "" }}>
                        <a href={changeLang()} className={styles.changeLanguage}>
                            <span className={styles.languageIcon}></span>
                            {props.lang === "ua" ? "EN" : "UA"}
                        </a>
                        <a href={`/${props.lang}/request`} className={styles.navButton}>
                            <span className={styles.sendIcon}></span>
                            {t(props.lang, "request")}
                        </a>
                        <a href={`/${props.lang}/support`} className={styles.navButton}>
                            <span className={styles.mailIcon}></span>
                            {t(props.lang, "support")}
                        </a>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <a href={changeLang()} className={styles.changeLanguage}>
                        <span className={styles.languageIcon}></span>
                        {props.lang === "ua" ? "EN" : "UA"}
                    </a>
                    <a href={`/${props.lang}/request`} className={styles.navButton}>
                        <span className={styles.sendIcon}></span>
                        {t(props.lang, "request")}
                    </a>
                    <a href={`/${props.lang}/support`} className={styles.navButton}>
                        <span className={styles.mailIcon}></span>
                        {t(props.lang, "support")}
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

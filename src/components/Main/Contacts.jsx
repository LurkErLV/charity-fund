import {t} from "../../languages/translations";
import styles from "../styles/Contacts.module.css";

function Contacts(props) {
    return (
        <div id={ t(props.lang, "") } className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.phone}>
                    <h1 className={styles.title}>{ t(props.lang, "contactDirectly") }</h1>
                    <p className={styles.description}>{ t(props.lang, "callBelow") }</p>
                    <a id="+380 99 554 7953" href="tel:+380995547953" className={styles.phoneNumber}><span
                        className={styles.phoneIcon}></span>+380 99 554 7953</a>
                </div>
                <div className={styles.socialNetworks}>
                    <h1 className={styles.title}>{ t(props.lang, "weOnSocialNetworks") }</h1>
                    <p className={styles.description}>{ t(props.lang, "followUs") }</p>
                    <div className={styles.socialNetworks_container}>
                        <a href="" target="_blank" className={styles.socialNetwork_block}><span className={styles.facebookIcon}></span>Facebook</a>
                        <a href="" target="_blank" className={styles.socialNetwork_block}><span className={styles.instagramIcon}></span>Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;

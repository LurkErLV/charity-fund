import {t} from "../../languages/translations";
import styles from "../styles/Reports.module.css";
import {useState} from "react";

function Reports(props) {

    const [isActive, setIsActive] = useState(true);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.reports}>
                    <div className={styles.category}>
                        <div className={styles.titleBlock}>
                            <span className={styles.categoryIcon}></span>
                            <h1 id={t(props.lang, "reporting")}
                                className={styles.title}>{t(props.lang, "reporting")}</h1>
                        </div>
                        <p className={styles.description}>{t(props.lang, "aboutOurAcquisitions")}</p>
                    </div>
                    <div className={styles.buttons}>
                        <a onClick={() => {
                            if (isActive) return;
                            setIsActive(true)
                        }
                        } className={`${isActive ? styles.active : styles.button}`}>{t(props.lang, "transmitted")}</a>
                        <a onClick={() => {
                            if (!isActive) return;
                            setIsActive(false)
                        }
                        } className={`${!isActive ? styles.active : styles.button}`}>{t(props.lang, "required")}</a>
                    </div>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.text}>
                            <h1 className={styles.date}>21.02.23</h1>
                            <div className={styles.description}>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.text}>
                            <h1 className={styles.date}>21.02.23</h1>
                            <div className={styles.description}>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.text}>
                            <h1 className={styles.date}>21.02.23</h1>
                            <div className={styles.description}>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                                <p>- Автомати ( 20 ш. )</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;

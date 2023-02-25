import {t} from "../../languages/translations";
import styles from "../styles/Transfers.module.css";

function Transfers(props) {

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Content copied to clipboard');
            /* Resolved - text copied to clipboard successfully */
        },() => {
            console.error('Failed to copy');
            /* Rejected - text failed to copy to the clipboard */
        });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.credentials}>
                <div className={styles.info_container}>
                    <div className={styles.info_block}>
                        <h1 className={styles.title}>🇺🇦 Перекази по Україні</h1>
                        <p className={styles.description}>БО Благодійний фонд Сергія Притули</p>
                        <p className={styles.description}>ЄДРПОУ 43720363</p>
                        <p className={styles.description}>Призначення платежу «Благодійна допомога»</p>
                        <div>
                            <h2 className={styles.currency}>Гривня</h2>
                            <div className={styles.account_block}
                                 onClick={() => copyToClipboard("UA47 305299 00000 2600502670745")}>
                                <p className={styles.account}>UA47 305299 00000
                                    26005026707459</p>
                                <span className={styles.copyIcon}></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.info_container}>
                    <div className={styles.info_block}>
                        <h1 className={styles.title}>🇪🇺 Перекази по Європі</h1>
                        <p className={styles.description}>БО Благодійний фонд Сергія Притули</p>
                        <p className={styles.description}>ЄДРПОУ 43720363</p>
                        <p className={styles.description}>Призначення платежу «Благодійна допомога»</p>
                        <div>
                            <h2 className={styles.currency}>Гривня</h2>
                            <div className={styles.account_block}
                                 onClick={() => copyToClipboard("UA47 305299 00000 2600502670745")}>
                                <p className={styles.account}>UA47 305299 00000
                                    26005026707459</p>
                                <span className={styles.copyIcon}></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.info_container}>
                    <div className={styles.info_block}>
                        <h1 className={styles.title}>🇺🇦 Перекази по Україні</h1>
                        <p className={styles.description}>БО Благодійний фонд Сергія Притули</p>
                        <p className={styles.description}>ЄДРПОУ 43720363</p>
                        <p className={styles.description}>Призначення платежу «Благодійна допомога»</p>
                        <div>
                            <h2 className={styles.currency}>Гривня</h2>
                            <div className={styles.account_block}
                                 onClick={() => copyToClipboard("UA47 305299 00000 2600502670745")}>
                                <p className={styles.account}>UA47 305299 00000
                                    26005026707459</p>
                                <span className={styles.copyIcon}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.payment}>
                <div className={styles.payment_block}>
                    <h1 className={styles.title}>Оберіт оплату</h1>
                    <p className={styles.description}>Виберіть за допомогую чого ви можете сплатити</p>
                    <div className={styles.buttons}>
                        <button className={styles.paymentType}>
                            MonoBank
                        </button>
                        <button className={styles.paymentType}>
                            Платіж картою
                        </button>

                        <button className={styles.continue}>
                            Перейти
                        </button>
                    </div>
                </div>

                <div className={styles.questions}>
                    <div className={styles.question_block}>
                        <span className={styles.textIcon}></span>
                        <p className={styles.questionText}>Есть вопрос или проблема?</p>
                    </div>

                    <a href="" className={styles.support}>Поддержка</a>
                </div>
            </div>
        </div>
    );
}

export default Transfers;

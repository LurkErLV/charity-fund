import {t} from "../../languages/translations";
import styles from "../styles/Form.module.css";

function Form(props) {
    return (
        <div className={styles.wrapper}>
            <form className={styles.form} action="POST">
                <div className={styles.element}>
                    <label className={styles.label} htmlFor="email">Електронна адреса *</label>
                    <input className={styles.input} name="email" type="email" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="requestFrom">Від кого запит *</label>
                    <input className={styles.input} name="requestFrom" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="numberOfMilitaryUnit">Номер військової частини *</label>
                    <input className={styles.input} name="numberOfMilitaryUnit" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="unitName">Номер бригади або назва підрозділу *</label>
                    <input className={styles.input} name="unitName" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="battalionNumber">Номер батальйону *</label>
                    <input className={styles.input} name="battalionNumber" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="division">Рота/Взвод</label>
                    <input className={styles.input} name="division" type="text"/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="positionOfCommander">ПІП, посада командира підрозділу
                        *</label>
                    <input className={styles.input} name="positionOfCommander" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="whatYouNeed">Що саме вам потрібно (назва та кількість
                        одиниць) *</label>
                    <textarea className={styles.input} name="whatYouNeed" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="position">Ваша поточна дислокація *</label>
                    <input className={styles.input} name="position" type="text"
                           placeholder="Пункт постійної дислокації або полігон" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="city">В якому місті зручно отримати допомогу? *</label>
                    <input className={styles.input} name="city" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="fullNameOfMilitaryContactPerson">Ім'я, прізвище контактної
                        особи військового *</label>
                    <input className={styles.input} name="fullNameOfMilitaryContactPerson" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="mobileNumberOfMilitaryContactPerson">Мобільний номер
                        контактної особи військового *</label>
                    <input className={styles.input} name="mobileNumberOfMilitaryContactPerson" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="contactOfSpecialist">Контакт спеціаліста</label>
                    <textarea className={styles.input} name="contactOfSpecialist"/>
                </div>

                <div className={styles.fileElement}>
                    <label className={styles.label} htmlFor="photo">Скан або фото офіційного запиту з печаткою ВЧ
                        *</label>
                    <input className={styles.fileInput} type="file" name="photo" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="seal">Печатка *</label>
                    <input className={styles.input} name="seal" type="text" required/>
                </div>

                <div className={styles.element}>
                    <label className={styles.label} htmlFor="contactOfSpecialist">Коментар</label>
                    <textarea className={styles.input} name="contactOfSpecialist" required/>
                </div>

                <button className={styles.submit} type="submit">Відправити</button>

            </form>
        </div>
    );
}

export default Form;

import {t} from "../../languages/translations";
import styles from "../styles/Card.module.css";

function Card(props) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={require("../images/drone.png")} alt="Drone"/>

            <h1 className={styles.title}>{ props.title }</h1>
            <p className={styles.description}>{ props.description }</p>
            <div className={styles.buttons}>
                <a className={styles.lookButton} href={ `${props.lang}${props.lookLink}` }>{ t(props.lang, "watch") }</a>
                <a className={styles.supportButton} href={ `${props.lang}${props.supportLink}` }>{ t(props.lang, "support") }</a>
            </div>
        </div>
    );
}

export default Card;

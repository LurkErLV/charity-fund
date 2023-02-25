import styles from "../styles/Category.module.css";
import Card from "./Card";
import {t} from "../../languages/translations";
import {useEffect, useState} from "react";

function Category(props) {

    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const cardsCount = document.getElementsByClassName(styles.cards)[0].children.length - 1;
        const allCards = document.getElementsByClassName(styles.cards)[0].children;

        for (let i = cardsCount - 1; i >= 8; i--) {
            allCards[i].style.display = "none";
        }

        if (cardsCount > 8) {
            setShowMore(true);
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.category}>
                <div className={styles.titleBlock}>
                    <span className={styles.categoryIcon}></span>
                    <h1 id={ t(props.lang, "collecting") } className={styles.title}>{t(props.lang, "collecting")}</h1>
                </div>
                <p className={styles.description}>{t(props.lang, "whatHavePurchased")}</p>
            </div>
            <div className={styles.cards}>
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"1'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"2'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"3'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"4'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"5'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"6'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"7'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"8'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"9'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <Card lang={props.lang}
                      title='Дрони, "Очі в небі"10'
                      description='Здійснили закупівлі 3787+ дронів для українського війська.'
                      lookLink='/'
                      supportLink='/'
                />
                <a onClick={() => {
                    const cardsCount = document.getElementsByClassName(styles.cards)[0].children.length - 1;
                    const allCards = document.getElementsByClassName(styles.cards)[0].children;

                    for (let i = cardsCount - 1; i >= 8; i--) {
                        allCards[i].style.display = "flex";
                    }

                    setShowMore(false);
                }} className={styles.showMore}
                   style={{display: !showMore ? "none" : ""}}>{t(props.lang, "showMore")}</a>
            </div>
        </div>
    );
}

export default Category;
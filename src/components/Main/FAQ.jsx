import {t} from "../../languages/translations";
import styles from "../styles/FAQ.module.css";

function FAQ(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.category}>
                    <span className={styles.categoryIcon}></span>
                    <h1 id={t(props.lang, "faq")} className={styles.title}>{t(props.lang, "faq")}</h1>
                </div>
                <p className={styles.description}>{t(props.lang, "mostFrequentlyAskedTerm")}</p>

                <div className={`accordion ${styles.accordionCustom}`} id="accordionExample">
                    <div className={`accordion-item ${styles.accordion_item_custom}`}>
                        <h2 className={`accordion-header`} id="headingOne">
                            <button className={`accordion-button ${styles.accordion_button_custom}`} type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <p className={styles.item_number}>1</p>
                                <p>Хто ми?</p>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${styles.accordion_body_custom}`}>
                                Велика частина його тексту складається з розділів 1.10.32-3 з Цицерона De finibus
                                bonorum ін malorum ( на кордонах добра і зла ; finibus може alspo перекласти як цілей).
                                Neque Порро quisquam Передбачуване Квай dolorem Ipsum Quia Dolor сидіти Амет,
                                consectetur, adipisci велить
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item ${styles.accordion_item_custom}`}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className={`accordion-button collapsed ${styles.accordion_button_custom}`}
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <p className={styles.item_number}>2</p>
                                <p>Як допомогти?</p>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                             data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${styles.accordion_body_custom}`}>
                                Велика частина його тексту складається з розділів 1.10.32-3 з Цицерона De finibus
                                bonorum ін malorum ( на кордонах добра і зла ; finibus може alspo перекласти як цілей).
                                Neque Порро quisquam Передбачуване Квай dolorem Ipsum Quia Dolor сидіти Амет,
                                consectetur, adipisci велить
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item ${styles.accordion_item_custom}`}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className={`accordion-button collapsed ${styles.accordion_button_custom}`}
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <p className={styles.item_number}>3</p>
                                <p>Як допомогти?</p>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                             data-bs-parent="#accordionExample">
                            <div className={`accordion-body ${styles.accordion_body_custom}`}>
                                Велика частина його тексту складається з розділів 1.10.32-3 з Цицерона De finibus
                                bonorum ін malorum ( на кордонах добра і зла ; finibus може alspo перекласти як цілей).
                                Neque Порро quisquam Передбачуване Квай dolorem Ipsum Quia Dolor сидіти Амет,
                                consectetur, adipisci велить
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;

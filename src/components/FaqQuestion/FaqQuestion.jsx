import React, { useState } from "react";
import styles from "./FaqQuestion.module.scss";
import SvgArrowR from "../SvgArrowR";

const FaqQuestion = ({ icon, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleQuestion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.faq_item} onClick={toggleQuestion}>
            <div className={styles.question}>
                <div className={styles.info}>
                    <p>{icon}</p>
                    <p>{text}</p>
                </div>

                <SvgArrowR />
            </div>
            {isOpen && (
                <div className={styles.answer}>
                    Test text, can be added by prop...
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi nesciunt deserunt asperiores est sequi,
                    consequuntur ducimus impedit dolorem quae ipsum eaque illo,
                    commodi ullam nulla quia laudantium delectus. Assumenda,
                    dolorem?
                </div>
            )}
        </div>
    );
};

export default FaqQuestion;

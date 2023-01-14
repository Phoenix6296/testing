import React from 'react'
import styles from './Card.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const Card = (props) => {
    return (
        <div className={`${styles.card__container} ${styles.center}`}>
            <div className={`${styles.card__image_text}`}>
                <img src={props.carImage} alt="Car1" />
                <div className={`${styles.card__text} ${styles.center} `}>
                    <h4>{props.carName}</h4>
                    <div>
                        <div className={`${styles.card__icons} ${styles.center}`}>
                            <i class="bi bi-eyedropper"></i>
                            <p>{props.color}</p>
                        </div>
                        <div className={`${styles.card__icons} ${styles.center}`}>
                            <i class="bi bi-car-front"></i>
                            <p>{props.seats}Seater</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>₹{props.price}</p>
            <button className={styles.card__button}>Book Now</button>
            <button className={styles.card__button}>Details</button>
        </div>
    )
}

export default Card
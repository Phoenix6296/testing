import React from 'react'
import styles from './Card.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
    return (
        <div className={`${styles.card__container} ${styles.center} mb-3`}>
            <div className={`${styles.card__image_text}`}>
                <img src={props.carImage} alt="Car" />
                <div className={`${styles.card__text} center d-flex`}>
                    <h4>{props.carName}</h4>
                    <div>
                        <div className={`${styles.card__icons} center d-flex`}>
                            <i className="bi bi-eyedropper"></i>
                            <p>{props.color}</p>
                        </div>
                        <div className={`${styles.card__icons} center d-flex`}>
                            <i className="bi bi-car-front"></i>
                            <p>{props.seats}Seater</p>
                        </div>
                    </div>
                </div>
            </div>
            <p>₹{props.price}</p>
            <button type="button" class="btn btn-secondary btn-medium">Book Now</button>
            <button type="button" class="btn btn-secondary btn-medium">Details</button>
        </div>
    )
}

export default Card
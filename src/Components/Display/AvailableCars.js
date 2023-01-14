import styles from './AvailableCars.module.css'
import Card from './Card'
import Car1 from '../../Assets/car1.webp'
import Car2 from '../../Assets/car2.jpeg'
import Car3 from '../../Assets/car3.jpeg'
import Car4 from '../../Assets/car4.webp'
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    { key: 1, carImage: Car1, carName: 'Hyndai Grand i10', color: 'White', seats: '4', price: '350', },
    { key: 2, carImage: Car2, carName: 'Ford EcoSport', color: 'Deep Blue', seats: '4', price: '1350', },
    { key: 3, carImage: Car3, carName: 'Maruti Suzuki XL6', color: 'Gloss Black', seats: '6', price: '850', },
    { key: 4, carImage: Car4, carName: 'Honda CR-V', color: 'Blue', seats: '4', price: '450', }
]
const AvailableCars = () => {
    return (
        <>
            <div className='container'>
                <h1 className='my-4'>Cars for Rent</h1>
                <hr />
                <div style={{ marginBottom: "50px" }}></div>
                {data.map((item) => { return (<Card key={item.key} carImage={item.carImage} carName={item.carName} color={item.color} seats={item.seats} price={item.price} />) })}
                <footer className={`styles.footer my-3`}>
                    <h2>Rent Vroom</h2>
                    <p>No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla Bengaluru, Karnataka 560034</p>
                    <div className={`${styles.icons} center d-flex justify-content-around`}>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter"></i>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default AvailableCars
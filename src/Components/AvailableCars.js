import React from 'react'
import Card from './Card'
import Car1 from '../Assets/car1.webp'
import Car2 from '../Assets/car2.jpeg'
import Car3 from '../Assets/car3.jpeg'
import Car4 from '../Assets/car4.webp'

const data = [
    {
        key: 1,
        carImage: Car1,
        carName: 'Hyndai Grand i10',
        color: 'White',
        seats: '4',
        price: '350',
    },
    {
        key: 2,
        carImage: Car2,
        carName: 'Ford EcoSport',
        color: 'Deep Blue',
        seats: '4',
        price: '1350',
    },
    {
        key: 3,
        carImage: Car3,
        carName: 'Maruti Suzuki XL6',
        color: 'Gloss Black',
        seats: '6',
        price: '850',
    },
    {
        key: 4,
        carImage: Car4,
        carName: 'Honda CR-V',
        color: 'Blue',
        seats: '4',
        price: '450',
    }
]
const AvailableCars = () => {
    return (
        <>
            {data.map((item) => { return (<Card key={item.key} carImage={item.carImage} carName={item.carName} color={item.color} seats={item.seats} price={item.price} />) })}
            <footer>
                <h2>Rent Vroom</h2>
                <p>No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla Bengaluru, Karnataka 560034</p>
            </footer>
        </>
    )
}

export default AvailableCars
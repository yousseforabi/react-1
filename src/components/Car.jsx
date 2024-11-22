
import mercedesCar from '../assets/images/mercedes.jpeg';
import ferrariCar from '../assets/images/ferrari.jpeg'; 
import hondaCar from '../assets/images/honda.jpeg';
import jeepCar from '../assets/images/jeep.jpeg';
import fordCar from '../assets/images/ford.jpeg';
import "../components/Car.css";

function Car() {
    return (
        <div className="car-showcase">
            <div className="car-item">
                <img src={mercedesCar} alt="Mercedes" />
                <h1 className="car-model">Hello, Mercedes!</h1>
                <p>Price: 2000 SEK</p>
            </div>
            <div className="car-item">
                <img src={ferrariCar} alt="Ferrari"/>
                <h1 className="car-model">Hello, Ferrari!</h1>
                <p>Price: 35000 SEK</p>
            </div>
            <div className="car-item">
                <img src={fordCar} alt="Ford"/>
                <h1 className="car-model">Hello, Ford!</h1>
                <p>Price: 15000 SEK</p>
            </div>
            <div className="car-item">
                <img src={jeepCar} alt="Jeep"/>
                <h1 className="car-model">Hello, Jeep!</h1>
                <p>Price: 12000 SEK</p>
            </div>
            <div className="car-item">
                <img src={hondaCar} alt="Honda"/>
                <h1 className="car-model">Hello, Honda!</h1>
                <p>Price: 18000 SEK</p>
            </div>
        </div>
    );
}

export default Car;
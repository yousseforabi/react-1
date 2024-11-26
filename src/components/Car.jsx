
import mercedesCar from '../assets/images/mercedes.jpeg';
import ferrariCar from '../assets/images/ferrari.jpeg'; 
import hondaCar from '../assets/images/honda.jpeg';
import jeepCar from '../assets/images/jeep.jpeg';
import fordCar from '../assets/images/ford.jpeg';
import "../components/Car.css";

function Car(props) {
    return (
        <div className="car-showcase">
            <div className="car-item">
                <img src={mercedesCar} alt="Mercedes" />
                <h1 className="car-model">{props.model1}</h1>
                <p>Price: {props.price1}SEK</p>
            </div>
            <div className="car-item">
                <img src={ferrariCar} alt="Ferrari"/>
                <h1 className="car-model">{props.model2}</h1>
                <p>Price: {props.price2} SEK</p>
            </div>
            <div className="car-item">
                <img src={fordCar} alt="Ford"/>
                <h1 className="car-model">{props.model3}</h1>
                <p>Price: {props.price3} SEK</p>
            </div>
            <div className="car-item">
                <img src={jeepCar} alt="Jeep"/>
                <h1 className="car-model">{props.model4}</h1>
                <p>Price: {props.price4} SEK</p>
            </div>
            <div className="car-item">
                <img src={hondaCar} alt="Honda"/>
                <h1 className="car-model">{props.model5}</h1>
                <p>Price: {props.price5} SEK</p>
            </div>
        </div>
    );
}

export default Car;
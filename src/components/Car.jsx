import mercedesCar from '../assets/images/mercedes.jpeg';
import ferrariCar from '../assets/images/ferrari.jpeg'; 
import hondaCar from '../assets/images/honda.jpeg';
import jeepCar from '../assets/images/jeep.jpeg';
import fordCar from '../assets/images/ford.jpeg';

function Car() {
    return (
        <>
        <img src={mercedesCar} alt="mercedes" />
        <h1>Hello, Mercedes!</h1>
        <p>price is 2000 SEK</p>
        <img src={ferrariCar} alt="ferarri"/>
        <h1>Hello, Ferrari!</h1>
        <p>price is 35000 SEK</p>
        <img src={fordCar} alt="ford"/>
        <h1>Hello, Ford!</h1>
        <p>price is 15000 SEK</p>
        <img src={jeepCar} alt="jeep"/>
        <h1>Hello, Jeep!</h1>
        <p>price is 12000 SEK</p>
        <img src={hondaCar} alt="bmw"/>
        <h1>Hello, Honda!</h1>
        <p>price is 18000 SEK</p>

        </>
        
      )

}

export default Car;

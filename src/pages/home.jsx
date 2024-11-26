import Car from '../components/Car.jsx';
import { useState } from 'react';
function home(options) {

    return <>
    <Car model1="Mercedes" price1="2300" 
    model2="FERARRI" price2="2300"
     model3="HINDA" price3="2300" 
     model4="FORD" price4="2300"
     model5="KIA" price5="2300"/>
   </>
   const [carName,setName] = useState("FORD");
   const [carPrice, setPrice] = useState(0);
   const updateName = () =>{
    setName("FORD");

   }
   const updatePrice = () =>{
    setPrice(carPrice+1);
   }
   return (
    <div>
        <button className='home-btn' onClick={updateName}></button>
      <h2>CAR NAME</h2>
      <button className='home-btn' onClick={updatePrice}>
        <h2>CAR PRICE</h2>
      </button>
    </div>
   )
}
export default home;
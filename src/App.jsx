import Car from './components/Car.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Home from '../pages/About.jsx';

function App() {
  return (  
  <> 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    
  </Routes>
  </BrowserRouter>
  </>),
 
  
}

export default App;


import './App.css';

import TopBar from './components/TopBar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import OrderNow from './components/OrderNow';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return(
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar/>}>
          <Route index element={<Home/>}/>
          <Route path="about"element={<About/>}/>
          <Route path="ordernow" element={<OrderNow/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          </Route>
      </Routes>
  
  </BrowserRouter>
  );
}

export default App;

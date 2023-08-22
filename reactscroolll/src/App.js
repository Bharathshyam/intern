
import './App.css';
import AboutUs from './components/AboutUs';
import Career from './components/Career';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Career/>
      <AboutUs/>
      <ContactUs/>
      
    </div>
  );
}

export default App;

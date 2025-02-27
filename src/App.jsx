
import './App.css'
import Header from './Components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './Sections/LandingPage'
import Introduction from './Sections/Introduction';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import { useEffect } from 'react';
import './custom.scss';
import Sights from './Sections/sights';
import FoodCulture from './Sections/FoodCulture';
import Tips from './Sections/Tips';
import Footer from './Components/Footer';

function App() {
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
      <>
      <BrowserRouter>
      <header>
    <Header></Header>
    </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/food-culture" element={<FoodCulture />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
          <Footer />
      </BrowserRouter>
      </>
  )
}

export default App


import './App.css'
import Header from './Components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './Sections/LandingPage'
import Introduction from './Sections/Introduction';
import { BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";
import { useEffect } from 'react';
import './custom.scss';
import Sights from './Sections/sights';
import FoodCulture from './Sections/FoodCulture';
import Tips from './Sections/Tips';
import Footer from './Components/Footer';
import DestPage from './Sections/DestPage';

function App() {
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
      <>
      <Router>
      <header>
    <Header></Header>
    </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/food-culture" element={<FoodCulture />} />
          <Route path='/DestPage' element={<DestPage/>}></Route>
          <Route path="/tips" element={<Tips />} />
        </Routes>
          <Footer />
      </Router>
      </>
  )
}

export default App


import './App.css'
import Header from './Components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from './Sections/LandingPage'
import Introduction from './Sections/Introduction';
import { BrowserRouter} from "react-router-dom";
import { useEffect } from 'react';
import './custom.scss';
import Sights from './Sections/sights';
import FoodCulture from './Sections/FoodCulture';


function App() {
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
      <>
      <section>
      <LandingPage/>
      </section>
      <section>
      <Introduction/>
      </section>
      <section>
      <Sights/>
      </section>
      <section>
      <FoodCulture/>
      </section>
      </>
  )
}

export default App

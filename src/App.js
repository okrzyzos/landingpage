import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Hero from './components/Hero';
import Cakes from './components/Cakes';
import Favorite from './components/Favorite';
import Footer from './components/Footer';
import Chefs from './components/Chefs';

function App() {
  return (
    <Router>

<div className="">
<Hero />
<Cakes id="menu"/>
<Favorite />
<Chefs  id="staff"/>
<Footer id="contact" />
    </div>
    </Router>
   
  );
}

export default App;

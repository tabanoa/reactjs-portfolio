import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Technologies from './components/Technologies/Technologies';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/home">
        <Navbar />
        <Home />
      </Route>
      <Route path="/about">
        <Navbar />
        <About />
      </Route>
      <Route path="/portfolio">
        <Navbar />
        <Portfolio />
      </Route>
      <Route path="/technologies">
        <Navbar />
        <Technologies />
      </Route>
      <Route path="/contact">
        <Navbar />
        <Contact />
      </Route>
      <Route path="/">
        <Navbar />
        <Home />
      </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Services from "./components/Services";
import Contact from './components/Contact';
import Explore from './components/Explore';
import AboutUs from './components/About Us';
import Footer from './components/Footer'

import './App.css';

const App = () => (
    
    <BrowserRouter>
    <Header/>
    <Switch>
        
        <Route exact path="/" component = {Home} />
        <Route exact path="/contact" component = {Contact} />
        <Route exact path="/services" component = {Services} />
        <Route exact path="/aboutus" component = {AboutUs} />
        <Route exact path="/explore" component = {Explore} />

    </Switch>
    <Footer/>
    </BrowserRouter>
)


export default App;

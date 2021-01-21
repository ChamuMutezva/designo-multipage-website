//import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
//import home from './homepage/home';
import './App.css';
import './header/Header.css'
import Home from './homepage/home'
import Navigation from './header/Nav'

function App() {
  return (
    <div className="App"> 
        <Navigation />              
         {/*<Home />*/}
    </div>
  );
}

export default App;

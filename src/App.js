import logo from './logo.svg';
import HeaderPrimary from './header/HeaderPrimary'
import Main from './main/Main'
import Footer from './footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">         
        <HeaderPrimary /> 
        <Main/> 
        <Footer/>  
    </div>
  );
}

export default App;

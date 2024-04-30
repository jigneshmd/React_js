import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Slider from './Slider';
import Main from './Main';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Head />  
      <Slider />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

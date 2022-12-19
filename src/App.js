import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Dashboard></Dashboard>
      <Routes>
        <Route path='login' element={<Login></Login>}></Route>
        {/* <Route path='dashboard' element={<Dashboard></Dashboard>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

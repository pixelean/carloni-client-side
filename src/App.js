import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div >
       {/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
       </Routes> */}
       <Home></Home>
    </div>
  );
}

export default App;

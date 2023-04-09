import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/Shared/NotFound';
import Header from './Pages/Home/Header';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

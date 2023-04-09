import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Home/home';
import Detail from './Components/Detail/Detail';
import Navbar from './Components/Navbar/Navbar';
import History from './History';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter history={History}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

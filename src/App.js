import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Day from './pages/Day';
import Week from './pages/Week';
import Month from './pages/Month';


function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/day" element={<Day />} />
            <Route path="/week" element={<Week />} />
            <Route path="/month" element={<Month />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

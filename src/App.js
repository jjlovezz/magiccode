import {useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basic from './components/page/Basic';
import Python from './components/page/Python';
import Scratch from './components/page/Scratch';
import SummerCamp from './components/page/SummerCamp';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  useEffect(() => {
Aos.init ({duration: 2000})
  },[])
  
 



  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic" element={<Basic />} />
            <Route path="/python" element={<Python />} />
            <Route path="/scratch" element={<Scratch />} />
            <Route path="/summercamp" element={<SummerCamp />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
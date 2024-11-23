import {useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScratchJr from './components/page/ScratchJr';
import Python from './components/page/Python';
import Scratch from './components/page/Scratch';
import Robotics from './components/page/Robotics';
import AI from './components/page/AI';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Support multi language
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import enTranslation from './locales/en.json';
import zhTranslation from './locales/zh.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    zh: {
      translation: zhTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  useEffect(() => {
Aos.init ({duration: 2000})
  },[])
  
 



  return (
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scratchjr" element={<ScratchJr />} />
            <Route path="/python" element={<Python />} />
            <Route path="/scratch" element={<Scratch />} />
            <Route path="/robotics" element={<Robotics />} />
            <Route path="/ai" element={<AI />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
    </I18nextProvider>
  );
}

export default App;
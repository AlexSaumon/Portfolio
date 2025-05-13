import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import './index.css';
import Home from './pages/Home/Home'
import Projet from './pages/Projet/Projet'
import Contact from './pages/Contact/Contact'
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projet" element={<Projet />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

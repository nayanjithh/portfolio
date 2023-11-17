import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import About from '../components/About/about';
import Work from '../components/Work/Work';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '../components/Contact/contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}
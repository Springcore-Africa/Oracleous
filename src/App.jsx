import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage';
import ProductPage from './pages/ProductPage'
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';



function App() { 
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-us-page" element={<AboutUsPage/>} />
        <Route path="/product-page" element={<ProductPage/>} />
        <Route path="/our-story-page" element={<OurStory/>} />
        <Route path="/contact-page" element={<Contact/>} />
      </Routes>
    </Router>
  )
}
export default App

import './App.css';
import AOS from 'aos';
import Navbar from './Navbar';
import Home from './Home';
import Intro from './Intro';
import Details from './Details';
import Testimonials from './Testimonials';
import Facts from './Facts';
import Team from './Team';
import Contact from './Contact';
import Price from './Price';
import Faq from './Faq';
import Footer from './Footer';
import External from './External';
import { Route, Routes } from 'react-router-dom';

function App() {

  AOS.init();


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/details' element={<Details />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/facts' element={<Facts />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/price' element={<Price />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/iframe' element={<External />} />
      </Routes>

      <Footer />

    </>

  );
}

export default App;

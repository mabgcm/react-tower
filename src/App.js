import './App.css';
import AOS from 'aos';
import Navbar from './Navbarr';
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
import Certificates from './Certificates/Certificates';
import Starters from './Certificates/Starters';
import Movers from './Certificates/Movers';
import Resources from './Resources/Resources';
import Activities from './Resources/Activities';
import Selftest from './Resources/Selftest';
import Parents from './Resources/Parents';
import Games from './Resources/Games';
import Flyers from './Certificates/Flyers';
import Ket from './Certificates/Ket';
import Pet from './Certificates/Pet';
import Fce from './Certificates/Fce';
import Button from 'react-bootstrap/Button';
import Register from './Register';
import { MessengerChat } from "react-messenger-chat-plugin";


function App() {

  AOS.init();





  return (
    <>
      <MessengerChat
        pageId="105882105455733"
        language="vi_VN"
        themeColor={"#C81429"}
        bottomSpacing={20}
        loggedInGreeting="Cảm ơn bạn đã liên hệ Tower Cambridge! Chúng tôi có thể giúp gì cho bạn?"
        loggedOutGreeting=""
        greetingDialogDisplay={"show"}
        debugMode={true}
        onMessengerShow={() => {
          console.log("onMessengerShow");
        }}
        onMessengerHide={() => {
          console.log("onMessengerHide");
        }}
        onMessengerDialogShow={() => {
          console.log("onMessengerDialogShow");
        }}
        onMessengerDialogHide={() => {
          console.log("onMessengerDialogHide");
        }}
        onMessengerMounted={() => {
          console.log("onMessengerMounted");
        }}
        onMessengerLoad={() => {
          console.log("onMessengerLoad");
        }}
      />
      <Navbar />
      <div className="stck1"><Button className=' d-flex-inline justify-content-end' variant='warning' size='sm' href="/contact" style={{ textTransform: 'capitalize' }} >Liên Hệ Với Chúng Tôi</Button></div>
      <div style={{ textTransform: 'capitalize' }} className="stck2"><Button variant='warning' size='sm' href="/register">Hướng dẫn đăng ký</Button></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='intro' element={<Intro />} />
        <Route path='details' element={<Details />} />
        <Route path='register' element={<Register />} />
        <Route path='testimonials' element={<Testimonials />} />
        <Route path='facts' element={<Facts />} />
        <Route path='team' element={<Team />} />
        <Route path='contact' element={<Contact />} />
        <Route path='price' element={<Price />} />
        <Route path='faq' element={<Faq />} />
        <Route path='iframe' element={<External />} />
        <Route path='certificates' element={<Certificates />}>
          <Route index element={<Starters />} />
          <Route path='starters' element={<Starters />} />
          <Route path='movers' element={<Movers />} />
          <Route path='flyers' element={<Flyers />} />
          <Route path='ket' element={<Ket />} />
          <Route path='pet' element={<Pet />} />
          <Route path='fce' element={<Fce />} />
        </Route>
        <Route path='resources' element={<Resources />}>
          <Route index element={<Activities />} />
          <Route path='activities' element={<Activities />} />
          <Route path='tests' element={<Selftest />} />
          <Route path='parents' element={<Parents />} />
          <Route path='games' element={<Games />} />
        </Route>
      </Routes>

      <Footer />

    </>

  );
}

export default App;

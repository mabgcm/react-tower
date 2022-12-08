import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './Intro';
import Details from './Details';
import Contact from './Contact';
import Facts from './Facts';
import Testimonials from './Testimonials';
import Team from './Team';
// import Price from './Price';
import Faq from './Faq';
import Cta from './Cta';
import Button from 'react-bootstrap/Button';
import Register from './Register';

const Home = () => {

    AOS.init();

    return (
        <div className='intro'>
            {/* <div className="stck1"><Button className=' d-flex-inline justify-content-end' variant='warning' size='sm' href="#contact">Contact Us</Button></div>
            <div className="stck2"><Button variant='warning' size='sm' href="#features">How to Register</Button></div> */}
            <div className='mt-0' id="main">
                <Intro />
                <Facts />
                <Testimonials />
                <Cta />
                <Details />
                <Register />
                <Team />
                <Cta />
                <Faq />
                <Contact />
            </div>
        </div>
    )
}

export default Home
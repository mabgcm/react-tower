import React from 'react'
import Image from 'react-bootstrap/Image'
import YouTube from 'react-youtube';
import Cta from './Cta';
import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'
import bg3 from './img/bg3.jpg'
import head from './img/headtext.png'
import head2 from './img/headtext2.png'

const Intro = () => {
    const opts = {
        height: '320',
        width: '100%',
        playerVars: {
            modestbranding: 1,
            autoplay: 0,
        },
    };

    return (
        <section className='about' id='about'>
            <div className="container" data-aos="fade-up">
                <h1 className='text-center'>Cách học tiếng anh tốt nhất dành cho con của bạn!</h1>
                <h2 className='text-center'>With the world's most prestigious English certificate.</h2>
                <Image src={head} style={{ borderRadius: "5px", width: '100%' }} />
                <div className="row d-flex align-items-center justify-content-center">
                    <div
                        className="col-12 col-xl-5 content d-flex pb-4 flex-column justify-content-center"
                        data-aos="fade-right">
                        <h3 className='text-center'>In 2022</h3>
                        <h3 className='text-center'>more than 8 million students</h3>
                        <h3 className='text-center'>in more than 170 countries</h3>
                        <h3 className='text-center'>proved their English competencies to the world with</h3>
                        <h3 className='text-center'>Cambridge English Certificate.</h3>
                    </div>
                    <div className="col-12 col-xl-7 mt-5 mb-5">
                        <Image src={bg1} style={{ borderRadius: "5px", width: '100%' }} />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h1 className='text-center display-1'>Now it's available in Vietnam!</h1>
                </div>

                <div className="row d-flex align-items-stretch mt-5">
                    <div
                        className="col-12 col-xl-6 content d-flex pb-4 flex-column justify-content-center"
                    >
                        <YouTube
                            videoId="gyIEhs7b1gQ"
                            opts={opts} />
                    </div>
                    <div className="col-12 col-xl-6 content d-flex pb-4 flex-column justify-content-center" data-aos="fade-in">
                        <h3 className='text-center'>All over the world,</h3>
                        <h3 className='text-center mt-2'>children improve their speaking, listening, reading and writing skills of English</h3>
                        <h3 className='text-center mt-2'>with confidence with our curriculum.</h3>
                    </div>
                </div>

                <Image src={head2} style={{ borderRadius: "5px", width: '100%' }} />

                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-xl-7 mt-5 mb-5">
                        <Image src={bg2} style={{ borderRadius: "5px", width: '100%' }} />
                    </div>
                    <div
                        className="col-12 col-xl-5 content d-flex pb-4 flex-column justify-content-center"
                        data-aos="fade-right">
                        <h3 className='text-center'>Cambridge certificates open the doors to your children in their future lives.</h3>
                        <h3 className='text-center'>There’s no fail in Cambridge Exams.</h3>
                        <h3 className='text-center'>Now you can access the quality of Cambridge anywhere in Vietnam</h3>
                    </div>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-xl-5 mt-5 mb-5">
                        <YouTube
                            videoId="sigBa3OhNkE"
                            opts={opts}
                        />                    </div>
                    <div
                        className="col-12 col-xl-7 content d-flex pb-4 flex-column justify-content-center"
                        data-aos="fade-right">
                        <h3 className='text-center'>Tower Cambridge online lessons are easy and fun to learn for your child.</h3>

                    </div>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 mt-5 mb-5">
                        <Image src={bg3} style={{ borderRadius: "5px", width: '100%' }} />
                    </div>
                    <div
                        className="col-12 content d-flex pb-4 flex-column justify-content-center"
                        data-aos="fade-right">
                        <h3 className='text-center'>We’re always aware of our students’ strengths to motivate and weaknesses to improve!</h3>
                        <h4 className='text-center'>Students in Tower Cambridge have always confidence to communicate in English in their daily lives.</h4>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
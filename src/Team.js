import React from 'react'
import T1 from './img/trainer-1.jpg'
import T2 from './img/trainer-2.jpg'
import T3 from './img/trainer-3.jpg'

const Team = () => {
    return (
        <section id="trainers" className="trainers">
            <div className="section-title" data-aos="fade-down">
                <span>Our Teachers</span>
                <h2>Our Teachers</h2>
                <h6>Our experienced native teachers always delivers the correct pronunciation of English!
                </h6>
            </div>
            <div className="container" data-aos="fade-up">

                <div className="row" data-aos="zoom-in" data-aos-delay="100">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src={T1} className="img-fluid" alt="" />
                            <div className="member-content">
                                <h4>Mr. Walter</h4>
                                <span>UK, 46</span>
                                <p>
                                    Mr Walter has been teaching Cambridge syllabus since 2013 for young learners and living in Bristol.
                                </p>
                                {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src={T2} className="img-fluid" alt="" />
                            <div className="member-content">
                                <h4>Ms Jhenson</h4>
                                <span>UK, 32</span>
                                <p>
                                    Having spent the past 9 years teaching TESOL, Ms Jhenson has the Masters of Education degree and 4 years of expertise in online teaching.
                                </p>
                                {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img src={T3} className="img-fluid" alt="" />
                            <div className="member-content">
                                <h4>Mr Anderson</h4>
                                <span>USA, 35</span>
                                <p>
                                    Mr Anderson has been living in Nashville, USA and teaching Cambridge curriculum since 2013.
                                </p>
                                {/* <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team
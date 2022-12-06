import React from 'react'
import T1 from './img/trainer-1.jpg'
import T2 from './img/trainer-2.jpg'
import T3 from './img/trainer-3.jpg'

const Team = () => {
    return (
        <section id="trainers" className="trainers">
            <div className="section-title" data-aos="fade-down">
                <span>Giáo viên của chúng tôi</span>
                <h2>Giáo viên của chúng tôi</h2>
                <h6>Những giáo viên bản ngữ (Anh, Mỹ, Canada,…) tràn đầy kinh nghiệm và khẩu âm chuẩn khiến những tiết học hào hứng, sôi động hơn.
                </h6>
                {/* <span>Our Teachers</span>
                <h2>Our Teachers</h2>
                <h6>Our experienced native teachers always delivers the correct pronunciation of English!
                </h6> */}
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
                                    Thầy Walter đã dạy giáo trình Cambridge từ năm 2013 cho các bạn trẻ từ 6 đến 17 tuổi. Hiện tại thầy đang sống ở Bristol, Anh quốc.
                                </p>
                                {/* <p>
                                    Mr Walter has been teaching Cambridge syllabus since 2013 for young learners and living in Bristol.
                                </p> */}
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
                                    Với 9 năm dạy TESOL, Cô Jhenson có bằng Thạc sĩ giáo dục ngôn ngữ Anh và 4 năm chuyên môn giảng dạy online.
                                </p>
                                {/* <p>
                                    Having spent the past 9 years teaching TESOL, Ms Jhenson has the Masters of Education degree and 4 years of expertise in online teaching.
                                </p> */}
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
                                    Thầy Anderson hiện đang sinh sống ở Nashville, Mỹ và bắt đầu giảng dạy giáo trình Cambridge từ năm 2013.
                                </p>
                                {/* <p>
                                    Mr Anderson has been living in Nashville, USA and teaching Cambridge curriculum since 2013.
                                </p> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team
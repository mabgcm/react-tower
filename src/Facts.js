import React from 'react'

const Facts = () => {

    return (
        <div>
            <section id="facts" className="facts">
                <div className="container">
                    <div className="section-title">
                        <div className="section-title" data-aos="fade-down">
                            <span>facts</span>
                            <h2>facts</h2>
                            {/* <h6>Hệ thống trực tuyến của chúng tôi đảm bảo giúp người học thành công.</h6> */}
                        </div>
                    </div>

                    <div className="row no-gutters">
                        <div
                            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                            data-aos="fade-up"
                        >
                            <div className="count-box">
                                <span>122</span>
                                <p><strong>Years</strong> of experience</p>
                            </div>
                            <div className="count-box">
                                <span>170</span>
                                <p><strong>Countries</strong></p>
                            </div>
                            <div className="count-box">
                                <span>8.000.000</span>
                                <p><strong>Students</strong> got our certificates in 2022</p>
                            </div>
                            <div className="count-box">
                                <span>25.000</span>
                                <p><strong>Institutions</strong> recognized our certificates</p>
                            </div>
                            <div className="count-box">
                                <span>57</span>
                                <p><strong>Offices</strong> around the world</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Facts
import React from 'react'
import CountUp from 'react-countup';

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
                            <CountUp start={0} end={122} duration={1.1}>
                                {({ countUpRef, start }) => (
                                    <div className="count-box">
                                        <span
                                            ref={countUpRef}
                                            className="purecounter"
                                            onShow={start}
                                        />
                                        <p><strong>Years</strong> of experience</p>
                                    </div>
                                )}

                            </CountUp>

                            <CountUp start={0} end={170} duration={1.1}>
                                {({ countUpRef, start }) => (
                                    <div className="count-box">
                                        <span
                                            ref={countUpRef}
                                            className="purecounter"
                                        />
                                        <p><strong>Countries</strong></p>
                                    </div>
                                )}

                            </CountUp>

                            <CountUp start={0} end={8000000} duration={1.1}>
                                {({ countUpRef, start }) => (
                                    <div className="count-box">
                                        <span
                                            ref={countUpRef}
                                            className="purecounter"
                                        />
                                        <p><strong>Students</strong> got our certificates in 2022</p>
                                    </div>
                                )}

                            </CountUp>

                            <CountUp start={0} end={25000} duration={1.1}>
                                {({ countUpRef, start }) => (
                                    <div className="count-box">
                                        <span
                                            ref={countUpRef}
                                            className="purecounter"
                                        />
                                        <p><strong>Institutions</strong> recognized our certificates</p>
                                    </div>
                                )}

                            </CountUp>

                            <CountUp start={0} end={57} duration={1.1}>
                                {({ countUpRef, start }) => (
                                    <div className="count-box">
                                        <span
                                            ref={countUpRef}
                                            className="purecounter"
                                        />
                                        <p><strong>Offices</strong>around the world</p>
                                    </div>
                                )}

                            </CountUp>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Facts
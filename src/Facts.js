import React from 'react'

const Facts = () => {

    return (
        <div>
            <section id="facts" className="facts">
                <div className="container">
                    <div className="section-title">
                        <div className="section-title" data-aos="fade-down">
                            <span>thành tích của chúng tôi</span>
                            <h2>thành tích của chúng tôi</h2>
                            <h6>Chúng tôi rất tự hào về thành quả của mình trên khắp thế giới.</h6>
                        </div>
                    </div>

                    <div className="row no-gutters">
                        <div
                            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                            data-aos="fade-up"
                        >
                            <div className="count-box">
                                <span>122</span>
                                <p><strong>Năm</strong> kinh nghiệm</p>
                            </div>
                            <div className="count-box">
                                <span>170</span>
                                <p><strong>Quốc Gia</strong></p>
                            </div>
                            <div className="count-box">
                                <span>8.000.000</span>
                                <p><strong>Học Viên</strong> đã nhận chứng chỉ trong năm 2021</p>
                            </div>
                            <div className="count-box">
                                <span>25.000</span>
                                <p><strong>Tổ Chức</strong> trên thế giới công nhận chứng chỉ</p>
                            </div>
                            <div className="count-box">
                                <span>57</span>
                                <p><strong>Chi Nhánh</strong> trên toàn thế giới</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Facts
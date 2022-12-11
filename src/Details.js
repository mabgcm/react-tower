import React from 'react'
import Image from 'react-bootstrap/Image'
import cycle from './img/cycle.png'


const Details = () => {


    return (
        <section id="teaching" className="services intro">
            <div className="container">
                <div className="section-title" data-aos="fade-down">
                    <span>Phương pháp giảng dạy của chúng tôi</span>
                    <h2>Phương pháp giảng dạy của chúng tôi</h2>
                    <h6>Bạn sẽ được trải nghiệm phương pháp giảng dạy online hiệu quả nhất trên thế giới.</h6>
                    {/* <span>Our teaching method</span>
                    <h2>Our teaching method</h2>
                    <h6>With Tower Cambridge you will experience the most effective online learning method.</h6> */}
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-5">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <h3>Trước buổi học</h3>
                            <h6>
                                Trước khi học trực tiếp, học sinh tham gia vào các hoạt động trước buổi học với sự trợ giúp của giáo viên Việt Nam. Bằng cách này, não trẻ hoàn toàn sẵn sàng học hỏi trong các bài học trực tiếp.
                            </h6>
                        </div>
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <h3>Phương pháp học Online hiệu quả</h3>
                            <h6>
                                Với tiếng anh Tower Cambridge,
                                trẻ em sẽ được học tiếng anh một cách thực tế và thú vị. Những tiết học được tương tác, đa dạng và dựa trên các hoạt động. Học tập là một phần thưởng đầy thú vị. Trẻ em sẽ tập trung vào những tình huống đời thường, phát triển những kỹ năng để thành công trong lớp học và ngoài cuộc sống.
                            </h6>
                        </div>
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <h3>Theo dõi tiến độ học tập sau những buổi học</h3>
                            <h6>
                                Sau mỗi bài học trực tiếp sẽ có báo cáo về học sinh, bao gồm tương tác trong bài học và tham gia hoạt động được gửi đến cha mẹ học sinh. Do đó, những trở ngại đối với sự thành công của học sinh sẽ được xác định và loại bỏ.
                            </h6>
                        </div>
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <h3>Kiểm tra định kỳ</h3>
                            <h6>
                                Hai tuần một lần, học viên sẽ làm bài kiểm tra thử để đánh giá sự tiến bộ của họ. Các bài kiểm tra định kỳ cũng giúp học sinh sẵn sàng cho bài kiểm tra Chứng chỉ Cambridge chính thức vào cuối khóa học.
                            </h6>
                        </div>
                    </div>
                    <div className="col-md-7 mt-5 mb-1 d-flex align-items-center justify-content-center">
                        <Image src={cycle} style={{ borderRadius: "5px", width: '100%' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details
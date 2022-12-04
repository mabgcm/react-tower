import React from 'react'
import './Testimonials.css'
// import $ from 'jquery';
import st1 from './img/st1.png'
import st2 from './img/st2.png'
import st3 from './img/st3.png'
import st4 from './img/st4.png'

const Testimonials = () => {

    return (
        <section>
            <div className="section-title" data-aos="fade-down">
                <span>Testimonials</span>
                <h2>Testimonials</h2>
                {/* <h6>Hệ thống trực tuyến của chúng tôi đảm bảo giúp người học thành công.</h6> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card d-flex mx-auto">
                            <div className="card-image">
                                <img className="img-fluid d-flex mx-auto" src={st1} alt='student' />
                            </div>
                            <div className="card-text">
                                <div className="card-title">Nguyễn Quỳnh Trang</div>
                                Tôi đã nghe rất nhiều về Tower Cambridge, vì thế tôi đã quyết định tham gia một khóa học để cải thiện các kĩ năng tiếng anh của mình. Tôi rất thích bầu không khí của các lớp học online, nó không hề nhàm chán như tôi vẫn tưởng – ngược lại đầy niềm vui và sự tương tác.
                            </div>
                            <div className="footer">
                                <span id="name"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card d-flex mx-auto">
                            <div className="card-image">
                                <img className="img-fluid d-flex mx-auto" src={st2} alt='student' />
                            </div>
                            <div className="card-text">
                                <div className="card-title">Lê Thùy Linh</div>
                                Chắc chắn Tower Cambridge là một trong các hệ thống học online tốt nhất mà tôi đã từng tham gia. Giáo viên rất thân thiện và luôn động viên học sinh cố gắng bằng tất cả khả năng của mình. Tài liệu học tập luôn được cập nhật và sẵn sàng phục vụ bất cứ khi nào. Cảm ơn Tower Cambridge, nơi luôn phù hợp để học những thứ mới lạ với tất cả mọi người trên thế giới.
                            </div>
                            <div className="footer">
                                <span id="name"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card d-flex mx-auto ">
                            <div className="card-image">
                                <img className="img-fluid d-flex mx-auto" src={st4} alt='student' />
                            </div>
                            <div className="card-text">
                                <div className="card-title">Nguyễn Hoàng Tuấn</div>
                                Tôi đến từ Việt Nam, và tôi rất thích học tiếng Anh tại Tower Cambridge vì ở đây rất vui và có rất nhiều hoạt động ! Tất cả giáo viên và nhân viên đều rất thân thiện, và chúng tôi thực hành nói ở trong lớp rất nhiều. Cảm ơn Tower Cambridge nhé, giờ đây tôi đã có thêm nhiều bạn mới rồi !
                            </div>
                            <div className="footer">
                                <span id="name"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card d-flex mx-auto ">
                            <div className="card-image">
                                <img className="img-fluid d-flex mx-auto" src={st3} alt='student' />
                            </div>
                            <div className="card-text">
                                <div className="card-title">Lê Quang Huy</div>
                                Đây thực sự là một nơi tuyệt vời cho học sinh tham gia học tập và tìm hiểu những thứ mới lạ. Nó giúp tôi hình thành một thái độ nghiêm túc trong việc học hành và giúp tôi khám phá thêm về khả năng của bản thân. Nó như một thư viện sống vậy !
                                {/* <br /><span id="name">Lê Quang Huy</span> */}
                            </div>
                            <div className="footer">
                                <span id="name"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Testimonials
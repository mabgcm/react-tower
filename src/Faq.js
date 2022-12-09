import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { FaQuestionCircle, FaInfoCircle } from "react-icons/fa";

const Faq = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="section-title" data-aos="fade-down">
                    <span>F.A.Q</span>
                    <h2>F.A.Q</h2>
                    <p>Những câu hỏi thường gặp</p>
                </div>

                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen1(!open1)}
                                aria-expanded={open1}
                                className="collapse"
                            ><strong><FaQuestionCircle />Một khóa học sẽ kéo dài bao lâu?</strong>
                            </a>
                            <Collapse in={open1}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Một khóa học sẽ kéo dài 9 tháng. Cuỗi mỗi kỳ, học sinh sẽ làm bài kiểm tra Cambridge và lấy chứng chỉ sau một vài tuần. Học sinh sau đó có thể đăng ký lộ trình tiếp theo và tham gia khóa học chứng chỉ cao cấp hơn.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen2(!open2)}
                                aria-expanded={open2}
                                className="collapse"
                            ><strong><FaQuestionCircle />Tiêu chí học sinh cần có để tham gia khóa học?</strong>
                            </a>
                            <Collapse in={open2}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Sau khi đăng ký khóa học, chúng tôi sẽ giúp đỡ và hướng dẫn học sinh làm bài Kiểm tra trình độ. Trình độ tiếng Anh hiện tại của người học sẽ được xác định và phân vào học phần phù hợp với tài khoản TOWER Cambridge.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen3(!open3)}
                                aria-expanded={open3}
                                className="collapse"
                            ><strong><FaQuestionCircle />Học viên thanh toán học phí của mình bằng cách nào?</strong>
                            </a>
                            <Collapse in={open3}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Bạn có thể thanh toán học phí qua PayPal. Bạn cũng có thể sử dụng Thẻ Tín dụng hoặc Thẻ Ghi nợ của mình.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen4(!open4)}
                                aria-expanded={open4}
                                className="collapse"
                            ><strong><FaQuestionCircle />Làm thế nào để đăng ký kỳ thi Cambridge sau khi kết thúc khóa học?</strong>
                            </a>
                            <Collapse in={open4}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Đội ngũ học thuật của chúng tôi sẽ giúp đỡ và hướng dẫn bạn đăng ký và nộp lệ phí thi Cambridge tại Trung tâm Khảo thí Cambridge được ủy quyền gần nhất ở quốc gia của bạn. Bạn sẽ được thông báo về quy trình đăng ký dự thi của mình bao gồm cách di chuyển và thủ tục cần có.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen5(!open5)}
                                aria-expanded={open5}
                                className="collapse"
                            ><strong><FaQuestionCircle />Làm thế nào để đảm bảo được thành công và hiệu quả?</strong>
                            </a>
                            <Collapse in={open5}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Chứng chỉ Chứng chỉ Cambridge xác định trình độ tiếng Anh của người dự thi, không nêu rõ đạt hay không đạt. Nó quyết định các kỹ năng nói, nghe, đọc và viết. Trong chứng chỉ này, người thi được chứng nhận nhận tối đa 5 huy hiệu trong mỗi lĩnh vực kỹ năng.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen6(!open6)}
                                aria-expanded={open6}
                                className="collapse"
                            ><strong><FaQuestionCircle />Tôi cần chuẩn bị gì để tham gia khóa học này?</strong>
                            </a>
                            <Collapse in={open6}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Bạn cần một chiếc máy tính xách tay hoặc máy tính để bàn để tham gia các khóa học của chúng tôi. Chúng tôi sử công nghệ giảng dạy online trong các tiết học vì thế bạn có thể gặp những vấn đề về kỹ thuật khi dùng máy tính bảng hoặc điện thoại thông minh trong quá trình diễn ra khóa học trực tuyến.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen7(!open7)}
                                aria-expanded={open7}
                                className="collapse"
                            ><strong><FaQuestionCircle />Học viên cần làm gì nếu muốn tiếp tục sau một thời gian nghỉ?</strong>
                            </a>
                            <Collapse in={open7}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Nếu học sinh nghỉ trong thời gian ngắn (một vài bài học), người học có thể bù lại kiến thức bằng cách nghiên cứu các bài học và tài liệu đã được ghi. Nếu thời gian nghỉ dài hạn, học sinh sẽ được xếp vào lớp mới phù hợp với trình độ của người học tại thời điểm tiếp tục.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen8(!open8)}
                                aria-expanded={open8}
                                className="collapse"
                            ><strong><FaQuestionCircle />Làm thế nào để tôi có thể biết được quá trình học của con đã và đang diễn ra như thế nào, giáo trình ra sao, số buổi con đã học và số buổi còn lại của con là bao nhiêu?</strong>
                            </a>
                            <Collapse in={open8}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Hoàn toàn dễ dàng để biết những điều đó khi bạn tham gia chương trình học của Tower Cambridge. Tất cả thông tin bạn cần biết đều được cập nhật và lưu trữ trên hệ thống LMS của chúng tôi, từ giáo trình cho đến số buổi học đã diễn ra và số buổi học còn lại của con, và đầy đủ các báo cáo sau mỗi buổi học, mỗi kì kiểm tra để phụ huynh có thể nắm bắt được lực học và trình độ của con một cách thường xuyên.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen9(!open9)}
                                aria-expanded={open9}
                                className="collapse"
                            ><strong><FaQuestionCircle />Nếu con tôi bận một việc gì đó (gia đình có việc đột xuất, con có các kì thi quan trọng ở trường, các hoạt động không thể bỏ) thì có được học bù lại nội dung đã bỏ lỡ của ngày hôm đó vào một ngày khác không?</strong>
                            </a>
                            <Collapse in={open9}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Rất tiếc là không, bởi vì các bài học của giáo trình Cambridge có nội dung liên quan chặt chẽ với nhau nên chúng tôi khuyến khích các con theo học liên tục và đẩy đủ hết mức có thể để có thể nắm rõ được nội dung bài học và rèn luyện các kĩ năng nghe - nói - đọc - viết với các GVNN, và cũng vì lịch làm việc của các thầy cô GVNN cũng rất bận nên không thể dạy bù cho các con được. Tuy nhiên, những bài các con đã học hay bỏ lỡ đều có tài liệu và nội dung cần học ở trên hệ thống, quý phụ huynh và các con có thể tải về và cho con tự học (hoặc sắp xếp lịch học bù riêng với các thầy cô GVVN, cái này sẽ phụ thuộc vào lịch làm việc của các thầy cô GVVN và thời gian rảnh của các con).
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                        <li data-aos="fade-up">
                            <a
                                onClick={() => setOpen10(!open10)}
                                aria-expanded={open10}
                                className="collapse"
                            ><strong><FaQuestionCircle />Ngoài hệ thống LMS trên website, tôi có thể theo dõi thêm quá trình của con qua ứng dụng chứ?</strong>
                            </a>
                            <Collapse in={open10}>
                                <div>
                                    <p>
                                        <FaInfoCircle />Hệ thống LMS hiện cập nhật rất đầy đủ các chức năng và có thể sử dụng qua trình duyệt web của máy tính cá nhân hoặc điện thoại, máy tính bảng ở bất cứ đâu, bất cứ lúc nào. Tuy nhiên, bộ phận IT của chúng tôi đang phát triển thêm cả ứng dụng trên điện thoại để mang đến trải nghiệm tuyệt vời nhất cho quý phụ huynh và học sinh.
                                    </p>
                                </div>
                            </Collapse>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Faq
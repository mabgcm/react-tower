import React from 'react';
import step1 from './img/step1.jpg'
import step2 from './img/step2.jpg'
import step3 from './img/step3.jpg'
import step4 from './img/step4.jpg'
import { MdOutlineAppRegistration } from 'react-icons/md';
import { MdOutlineComputer } from 'react-icons/md';
import { RiCheckboxMultipleLine } from 'react-icons/ri';
import { BsCalendar2Day } from 'react-icons/bs';

const Register = () => {

    const imgstyle = {
        width: '70%',
        borderRadius: '10px'
    }
    const istyle = {
        fontSize: '50px',
        color: 'rgb(200, 20, 41)'
    }

    return (
        <section id="teaching" className="services intro">
            <div className="container">
                <div className="features" id="features">
                    <div className="section-title" data-aos="fade-down">
                        <span>Cách đăng ký khóa học </span>
                        <h2>Cách đăng ký khóa học </h2>
                        <h6>Đăng ký khóa học của chúng tôi với 4 bước đơn giản, và sau đó bắt đầu học tiếng Anh với sự thoải mái, tiện nghi tại nhà của bạn.</h6>
                        {/* <span>how to register</span>
                        <h2>how to register</h2>
                        <h6>Register our lessons in 4 simple steps and start learning English from the comfor of your home.</h6> */}
                    </div>
                    <ul className="nav nav-tabs row d-flex">
                        <li className="nav-item col-3">
                            <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                                <MdOutlineAppRegistration style={istyle} />
                                <h4 className="d-none d-lg-block px-1">1-Điền thông tin cần thiết vào bản đăng ký online</h4>
                                {/* <h4 className="d-none d-lg-block px-1">1-Fill the form</h4> */}
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                                <MdOutlineComputer style={istyle} />
                                <h4 className="d-none d-lg-block px-1">2-Tham gia lớp học thử miễn phí</h4>
                                {/* <h4 className="d-none d-lg-block px-1">2-Join Free Lessons</h4> */}
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                                <RiCheckboxMultipleLine style={istyle} />
                                <h4 className="d-none d-lg-block px-2">3-Chọn kế hoạch học tập của bạn</h4>
                                {/* <h4 className="d-none d-lg-block px-2">3-Choose your plan</h4> */}
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                                <BsCalendar2Day style={istyle} />
                                <h4 className="d-none d-lg-block px-2">4-Lên lịch học thuận tiện với bạn</h4>
                                {/* <h4 className="d-none d-lg-block px-2">4-Set your Schedule</h4> */}
                            </a>
                        </li>
                    </ul>


                    <div className="tab-content">
                        <div className="tab-pane active show" id="tab-1">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-0 mt-lg-5">
                                    <h1>STEP 1: Đăng ký tham gia hệ thống LMS của chúng tôi và bắt đầu làm bài kiểm tra trình độ đầu vào.</h1>
                                    {/* <h1>STEP 1: Register our LMS  and take the placement test.</h1> */}
                                    <h4 className="fst-italic">
                                        Nhấn vào nút đăng ký trên trang web và điền thông tin cần thiết vào bản đăng ký online. Hoàn thành bài kiểm tra trình độ sau khi đăng ký.
                                    </h4>
                                    {/* <h4 className="fst-italic">
                                        Click on the registration button on our page and fill the form entering your information. Complete the short test after registration.
                                    </h4> */}
                                    <p>
                                        Đội ngũ giáo vụ của chúng tôi sẽ nhận định khả năng tiếng Anh của bạn và xếp bạn vào lớp học phù hợp trình độ để bạn có thể học một cách hiệu quả nhất.
                                    </p>
                                    {/* <p>
                                        Our academic team will define your English level to place you in the most suitable group for the most effective learning.
                                    </p> */}
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={step1} alt="" className="img-fluid" style={imgstyle} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-2">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-0 mt-lg-5">
                                    <h1>STEP 2: Hãy tham gia những lớp học thử miễn phí của chúng tôi ngay !</h1>
                                    {/* <h1>STEP 2: Join our free lesson!</h1> */}
                                    <h4>
                                        Để biết được chất lượng và kinh nghiệm của đội ngũ giáo viên Tower Cambridge, chúng tôi rất khuyến khích bạn tham gia vào các lớp học thử miễn phí.
                                    </h4>
                                    {/* <h4>
                                        In order to see our lesson quality and experience our teachers' proficiency we strongly recommend you to join the one-hour free lesson.
                                    </h4> */}
                                    <p className="fst-italic">
                                        Dựa vào những thông tin mà bạn đã điền vào bản đăng ký, chúng tôi sẽ gửi lời mời với những lựa chọn về thời gian thích hợp để bạn tham gia lớp học.
                                        Sau khi kết thúc những lớp học thử, bạn không nhất thiết phải tiếp tục với chúng tôi nếu như bạn không hài lòng. <strong>Nhưng chúng tôi tin chắc rằng bạn sẽ thích học tại Tower Cambridge !</strong>
                                    </p>
                                    {/* <p className="fst-italic">
                                        According to the details you send us via the free online registration form we will send you an invitation with the options for the suitable day and time for you. After the free lesson, you have no obligation to continue with us. <strong>But we are sure that you will love to learn with us!</strong>
                                    </p> */}
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={step2} alt="" className="img-fluid" style={imgstyle} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-3">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-0 mt-lg-5">
                                    <h1>STEP 3: Hãy chọn gói khóa học mà bạn cảm thấy phù hợp, và ký vào thỏa thuận cam kết giáo dục của chúng tôi.</h1>
                                    {/* <h1>STEP 3: Select your tuition plan and sign the contract.</h1> */}
                                    <h4>
                                        Nếu bạn thấy thích phương pháp giảng dạy của chúng tôi và quyết định học ngay lập tức, bạn không cần phải đợi thêm nữa. Chúng tôi luôn có thể bắt đầu giảng dạy bất cứ khi nào bạn muốn.
                                    </h4>
                                    {/* <h4>
                                        If you like our online teaching method and decide to start the lessons, you don’t need to wait more!
                                    </h4> */}
                                    <p className="fst-italic">
                                        Đội ngũ Marketing của chúng tôi sẽ tư vấn và đưa ra những gói khóa học thích hợp với quỹ học tập của bạn.
                                    </p>
                                    {/* <p className="fst-italic">
                                        Our marketing team will help you for the best tuition plan suitable for your budget.
                                    </p> */}
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={step3} alt="" className="img-fluid" style={imgstyle} />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-4">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-0 mt-lg-5">
                                    <h1>STEP 4: Xếp lịch và bắt đầu học nào !</h1>
                                    {/* <h1>STEP 4: Set your schedule and start your lessons.</h1> */}
                                    <h4>
                                        Đội ngũ giáo vụ của chúng tôi sẽ sắp xếp lịch học cho bạn dựa theo thông tin bạn đã đăng ký, và sau đó bạn có thể bắt đầu học ngay.
                                    </h4>
                                    {/* <h4>
                                        Our academic team will arrange a schedule according to your free time, then you can start your lessons.
                                    </h4> */}
                                    <p className="fst-italic">
                                        Dựa theo số chỗ trống trong lớp học, thời gian học và trình độ của học sinh đã đăng ký, chúng tôi sẽ sắp xếp lịch học phù hợp và bạn có thể bắt đầu học tiếng Anh với chúng tôi.
                                    </p>
                                    {/* <p className="fst-italic">
                                        According to the class availability, student available schedule and the student level we will arrange your lesson schedule and you can start learning English with us!
                                    </p> */}
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={step4} alt="" className="img-fluid" style={imgstyle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Register
import React from 'react'
import Image from 'react-bootstrap/Image'
import YouTube from 'react-youtube';
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
                <h2 className='text-center'>Chứng chỉ tiếng Anh uy tín nhất thế giới.</h2>
                {/* <h2 className='text-center'>With the world's most prestigious English certificate.</h2> */}
                <Image src={head} style={{ borderRadius: "5px", width: '100%' }} />
                <div className="row d-flex align-items-center justify-content-center">
                    <div
                        className="col-12 col-xl-5 content d-flex pb-4 flex-column justify-content-center"
                        data-aos="fade-right">
                        <h3 className='text-center'>Trong năm 2022</h3>
                        <h3 className='text-center'>có hơn 8 triệu học viên</h3>
                        <h3 className='text-center'>tại hơn 170 quốc gia</h3>
                        <h3 className='text-center'>đã chứng minh khả năng tiếng Anh của mình với thế  giới</h3>
                        <h3 className='text-center'>bằng chứng chỉ Cambridge.</h3>
                        {/* <h3 className='text-center'>In 2022</h3>
                        <h3 className='text-center'>more than 8 million students</h3>
                        <h3 className='text-center'>in more than 170 countries</h3>
                        <h3 className='text-center'>proved their English competencies to the world with</h3>
                        <h3 className='text-center'>Cambridge English Certificate.</h3> */}
                    </div>
                    <div className="col-12 col-xl-7 mt-5 mb-5">
                        <Image src={bg1} style={{ borderRadius: "5px", width: '100%' }} />
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h1 className='text-center display-1'>Và bây giờ chúng tôi đã có mặt tại Việt Nam!</h1>
                    {/* <h1 className='text-center display-1'>Now it's available in Vietnam!</h1> */}
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
                        <h3 className='text-center'>Trên khắp thế giới,</h3>
                        <h3 className='text-center mt-2'>trẻ em đã và đang cải thiện kĩ năng giao tiếp, nghe, đọc hiểu và viết tiếng Anh một cách tự tin dưới sự hướng dẫn và truyền tải kiến thức </h3>
                        <h3 className='text-center mt-2'>theo giáo trình Cambridge.</h3>
                        {/* <h3 className='text-center'>All over the world,</h3>
                        <h3 className='text-center mt-2'>children improve their speaking, listening, reading and writing skills of English</h3>
                        <h3 className='text-center mt-2'>with confidence with our curriculum.</h3> */}
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
                        <h3 className='text-center'>Chứng chỉ Cambridge mở các cánh cửa cho con của bạn trong tương lai.</h3>
                        <h3 className='text-center'>Sẽ không có thất bại trong các bài kiểm tra của Cambridge.</h3>
                        <h3 className='text-center'>Ngay bây giờ bạn có thể tham gia hệ thống giáo dục đào tạo chất lượng của Cambridge tại bất kỳ nơi nào ở Việt Nam.</h3>
                        {/* <h3 className='text-center'>Cambridge certificates open the doors to your children in their future lives.</h3>
                        <h3 className='text-center'>There’s no fail in Cambridge Exams.</h3>
                        <h3 className='text-center'>Now you can access the quality of Cambridge anywhere in Vietnam</h3> */}
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
                        <h3 className='text-center'>Những bài học online của Tower Cambridge rất vui và kích thích khả năng học hỏi, trí tò mò muốn tìm hiểu những thứ mới lạ trên khắp thế giới của học sinh.</h3>
                        {/* <h3 className='text-center'>Tower Cambridge online lessons are easy and fun to learn for your child.</h3> */}

                    </div>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 mt-5 mb-5">
                        <a href='https://towercambridge01.ayotree.com/StudentRegisterSchool.aspx?MasterTeacherID=36344&UserType=parent&templateType=crm&CampusID=8548' target='__blank'><Image src={bg3} style={{ borderRadius: "5px", width: '100%' }} /></a>
                    </div>
                    <div
                        className="col-12 content d-flex pb-4 flex-column justify-content-center"
                        data-aos="fade-right">
                        <h3 className='text-center'>Chúng tôi luôn nắm được điểm mạnh của học viên để tạo niềm cảm hứng và hơn hết, điểm yếu của học viên cũng được chỉ ra rõ ràng để tập trung cải thiện.</h3>
                        <h4 className='text-center'>Những học viên của Tower Cambridge luôn luôn tràn đầy tự tin khi giao tiếp tiếng Anh với bạn bè, người thân, hay với người lạ trong cuộc sống thường ngày.</h4>
                        {/* <h3 className='text-center'>We’re always aware of our students’ strengths to motivate and weaknesses to improve!</h3>
                        <h4 className='text-center'>Students in Tower Cambridge have always confidence to communicate in English in their daily lives.</h4> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
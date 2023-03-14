import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>TARB LLC</h3>
                            <p>
                                16192 Coastal Hwy <br />
                                Lewes, DE 19958<br />
                                United States <br /><br />
                                Tầng 9 - 10, <br />
                                05 Điện Biên Phủ,<br />
                                Ba Đình, Hà Nội <br /><br />
                                {/* <strong>Phone:</strong> +1 (506) 349-3512<br /> */}
                                <strong>Phone:</strong> +84 (789) 375-250<br />
                                <strong>Email:</strong> info@towercambridge.com<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Browse Site</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="register">Hướng Dẫn Đăng Ký</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="details">Phương Pháp Giảng Dạy</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="faq">Những câu hỏi thường gặp</a>
                                </li>




                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Chứng chỉ Cambridge</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/certificates/starters">Starters</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/certificates/movers">Movers</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/certificates/flyers">Flyers</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/certificates/ket">KET</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/certificates/pet">PET</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="/certificates/fce">FCE</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Mạng xã hội</h4>
                            <p>
                                Theo dõi chúng tôi qua các nền tảng xã hội:
                            </p>
                            <div className="social-links mt-3">
                                <a href="https://www.facebook.com/anhngucambridge101" target="__blank" className="facebook"
                                ><FaFacebookF /></a>


                                <a href="https://www.linkedin.com/company/tower-cambridge" target="__blank" className="linkedin"
                                ><FaLinkedinIn />
                                </a>
                            </div>
                            <div><a target='new' href="https://click.linksynergy.com/fs-bin/click?id=yo*k*ZdsEpY&offerid=311675.10000128&subid=0&type=4&LSNSUBSITE=LSNSUBSITE"><img border="0" alt="Rakuten Marketing Welcome Program" src="https://ad.linksynergy.com/fs-bin/show?id=yo*k*ZdsEpY&bids=311675.10000128&subid=0&type=4&gridnum=0" /></a></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container py-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>TARB LLC</span></strong
                    >. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://mabgcm.com/">M.A.Bugucam</a>
                </div>
            </div> */}
        </div >
    )
}

export default Footer
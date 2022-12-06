import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

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
                                <strong>Phone:</strong> +1 (302) 645-7400<br />
                                <strong>Phone:</strong> +84 (789) 375-250<br />
                                <strong>Email:</strong> info@towercambridge.com<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Browse Site</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="vn_index.html">Home</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="vn_index.html#about">How to Register</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="vn_index.html#pricing">Teaching</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <a href="vn_index.html#faq">Những câu hỏi thường gặp</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="#">Điều khoản dịch vụ</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Chứng chỉ Cambridge</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="starters.html">Starters</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="movers.html">Movers</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="flyers.html">Flyers</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="ket.html">Ket</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <a href="pet.html">Pet</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Mạng xã hội</h4>
                            <p>
                                Theo dõi chúng tôi qua các nền tảng xã hội:
                            </p>
                            <div className="social-links mt-3">
                                <a href="https://www.facebook.com/anhngucambridge101" target="_blank" className="facebook"
                                ><FaFacebookF /></a>


                                <a href="https://www.linkedin.com/company/tower-cambridge" target="_blank" className="linkedin"
                                ><FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>TARB LLC</span></strong
                    >. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://mabgcm.com/">M.A.Bugucam</a>
                </div>
            </div>
        </div >
    )
}

export default Footer
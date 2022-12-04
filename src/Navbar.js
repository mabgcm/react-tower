import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TowerLogo from './white.svg'
import { Link } from 'react-router-dom'


function Navbar() {
    return (

        <header id="header" className="d-flex fixed-top align-items-center mb-0">
            <div
                className="container d-flex align-items-center justify-content-between mb-0"
            >
                <div className="logo mb-0">
                    <Link to="/">
                        <img
                            src={TowerLogo}
                            alt="Tower Cambridge"
                            className="twrlogo img-fluid" />
                    </Link>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link to='/iframe'>Trang Chủ</Link>
                            {/* <a className="nav-link scrollto active" href="vn_index.html"
                            >Trang Chủ</a> */}
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="vn_index.html#about"
                            >Về Chúng Tôi</a
                            >
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="vn_index.html#pricing"
                            >Học Phí</a
                            >
                        </li>
                        <li className="dropdown">
                            <a href="vn_cert.html"
                            ><span>Chứng Chỉ</span> <i className="bi bi-chevron-down"></i
                            ></a>
                            <ul>
                                <li className="dropdown">
                                    <a href="vn_why.html"
                                    ><span>Tại sao nên chọn chúng tôi?</span
                                    ><i className="bi bi-chevron-right"></i
                                    ></a>
                                    <ul>
                                        <li>
                                            <a href="vn_whoaccepts.html">Ai sẽ chấp nhập bài kiểm tra của chúng tôi?</a>
                                        </li>
                                        <li><a href="vn_visas.html">Visa và nhập cư</a></li>
                                        <li><a href="vn_study.html">Du học</a></li>
                                    </ul>
                                </li>
                                <li><a href="vn_starters.html">Starters</a></li>
                                <li><a href="vn_movers.html">Movers</a></li>
                                <li><a href="vn_flyers.html">Flyers</a></li>
                                <li><a href="vn_ket.html">KET</a></li>
                                <li><a href="vn_pet.html">PET</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="vn_learn.html"
                            ><span>Nguồn</span> <i className="bi bi-chevron-down"></i
                            ></a>
                            <ul>
                                <li><a href="vn_activity.html">Hoạt động miễn phí</a></li>
                                <li><a href="vn_preperation.html">Chuẩn bị bài kiểm tra</a></li>
                                <li><a href="vn_testenglish.html">Kiểm tra khả năng tiếng anh của bạn</a></li>
                                <li><a href="vn_parents.html">Phụ huynh và học sinh</a></li>
                                <li><a href="vn_games.html">Trò chơi và mạng xã hội</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="recruit.html">Work With Us</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <div>
                    <a id="signin" href="https://ayotree.com/HomepageTemplateMaster/Login/default.aspx?menu=&submenu=&MasterTeacherID=36344">ĐăngNhập</a>
                </div>
                {/* <div className="lan">
                    <div className="lang">
                        <a href="index.html">🇺🇸</a>
                    </div>
                    <div className="lang">
                        <a href="vn_index.html">🇻🇳</a>
                    </div>
                </div> */}
            </div>
        </header>
    )
}

export default Navbar
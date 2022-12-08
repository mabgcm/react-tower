import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TowerLogo from './white.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'


const Navbarr = () => {

    const imgstyle = {
        height: '80px',
        width: '170px',
        borderRadius: '0',
        position: 'relative',
        marginTop: '15px',
    }

    return (

        <Navbar sticky='top' collapseOnSelect expand="lg" bg='' variant="dark" style={{ backgroundColor: "rgb(0, 35, 121)", marginBottom: '0' }}>
            <Container >
                <Navbar.Brand href="/" className='col-4' >
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <Image src={TowerLogo} style={imgstyle} alt="Tower Cambridge" className="logo img-fluid" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="register">How To Register</Nav.Link>
                        <Nav.Link href="details">Teaching</Nav.Link>
                        <Nav.Link href="/certificates">Certificates</Nav.Link>
                        <Nav.Link href="/resources">Resources</Nav.Link>
                        <Nav.Link href="/faq">F.A.Q</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="contact">Contact Us</Nav.Link>
                        <Nav.Link href="https://towercambridge01.ayotree.com/HomepageTemplateMaster/Login/default.aspx?menu=&submenu=&MasterTeacherID=36344">
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >


        // <header id="header" className="d-flex fixed-top align-items-center mb-0">
        //     <div
        //         className="container d-flex align-items-center justify-content-between mb-0"
        //     >
        //         <div className="logo mb-0">
        //             <Link to="/">
        //                 <img
        //                     src={TowerLogo}
        //                     alt="Tower Cambridge"
        //                     className="twrlogo img-fluid" />
        //             </Link>
        //         </div>

        //         <nav id="navbar" className="navbar navbar-expand-lg">
        //             <div className="container-fluid">
        //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span className="navbar-toggler-icon"></span>
        //                 </button>
        //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                         <li className="nav-item">
        //                             <Link to='/iframe'>Trang Chủ</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link scrollto" href="vn_index.html#about"
        //                             >Về Chúng Tôi</a
        //                             >
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link scrollto" href="vn_index.html#pricing"
        //                             >Học Phí</a
        //                             >
        //                         </li>
        //                         <li className=" nav-item dropdown">
        //                             <a href="vn_cert.html"
        //                             ><span>Chứng Chỉ</span> <i className="nav-link dropdown-toggle"></i
        //                             ></a>
        //                             <ul className="dropdown-menu">
        //                                 <li className="dropdown">
        //                                     <a href="vn_why.html"
        //                                     ><span>Tại sao nên chọn chúng tôi?</span
        //                                     ><i className="nav-link dropdown-toggle"></i
        //                                     ></a>
        //                                     <ul className="dropdown-menu">
        //                                         <li>
        //                                             <a href="vn_whoaccepts.html">Ai sẽ chấp nhập bài kiểm tra của chúng tôi?</a>
        //                                         </li>
        //                                         <li><a href="vn_visas.html">Visa và nhập cư</a></li>
        //                                         <li><a href="vn_study.html">Du học</a></li>
        //                                     </ul>
        //                                 </li>
        //                                 <li><a href="vn_starters.html">Starters</a></li>
        //                                 <li><a href="vn_movers.html">Movers</a></li>
        //                                 <li><a href="vn_flyers.html">Flyers</a></li>
        //                                 <li><a href="vn_ket.html">KET</a></li>
        //                                 <li><a href="vn_pet.html">PET</a></li>
        //                             </ul>
        //                         </li>
        //                         <li className="dropdown">
        //                             <a href="vn_learn.html"
        //                             ><span>Nguồn</span> <i className="nav-link dropdown-toggle bi bi-chevron-down"></i
        //                             ></a>
        //                             <ul>
        //                                 <li><a href="vn_activity.html">Hoạt động miễn phí</a></li>
        //                                 <li><a href="vn_preperation.html">Chuẩn bị bài kiểm tra</a></li>
        //                                 <li><a href="vn_testenglish.html">Kiểm tra khả năng tiếng anh của bạn</a></li>
        //                                 <li><a href="vn_parents.html">Phụ huynh và học sinh</a></li>
        //                                 <li><a href="vn_games.html">Trò chơi và mạng xã hội</a></li>
        //                             </ul>
        //                         </li>
        //                         <li><a className="nav-link scrollto" href="recruit.html">Work With Us</a></li>
        //                     </ul>
        //                 </div>
        //             </div>


        //         </nav>
        //         <div>
        //             <a id="signin" href="https://ayotree.com/HomepageTemplateMaster/Login/default.aspx?menu=&submenu=&MasterTeacherID=36344">ĐăngNhập</a>
        //         </div>
        //         {/* <div className="lan">
        //             <div className="lang">
        //                 <a href="index.html">🇺🇸</a>
        //             </div>
        //             <div className="lang">
        //                 <a href="vn_index.html">🇻🇳</a>
        //             </div>
        //         </div> */}
        //     </div>
        // </header>
    )
}

export default Navbarr
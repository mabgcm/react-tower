import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const notify = () =>
        toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_RIGHT
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_syzdxbj', 'template_4tu90yn', form.current, 'yQ1T7k5-aRRbj9Mc7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };

    return (

        <div id='contact' className="row d-flex align-items-center justify-content-center">
            <div className="col-1"></div>
            <div className="col-10">
                <div className="section-title" data-aos="fade-down">
                    <span>Contact Us</span>
                    <h2>Contact Us</h2>
                    <h6>Hệ thống trực tuyến của chúng tôi đảm bảo giúp người học thành công.</h6>
                </div>
                <Form ref={form} onSubmit={sendEmail}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-0" controlId="formBasicName">
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control size='sm' type="text" name='user_name' placeholder="Enter your name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control size='sm' type="email" name='user_email' placeholder="Enter your email" />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-1" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control size='sm' type="text" name='address' placeholder="Enter your adress" />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicTel">
                        <Form.Label>Your Telephone Number</Form.Label>
                        <Form.Control size='sm' type="tel" name='phone' placeholder="Enter your telephone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>Student's Age</Form.Label>
                        <Form.Control size='sm' type="number" name='age' placeholder="Enter your age" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button id='signin' onClick={notify} variant="success" type="submit">
                            Contact Us
                        </Button>
                        <ToastContainer />
                    </div>


                </Form>
            </div>
            <div className="col-1"></div>
        </div>


    )
}

export default Contact
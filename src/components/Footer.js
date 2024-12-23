import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <>

            <Container id='contact'>
                <Row className='footer'>

                    <Col xs={6} lg={3} className='footerBox'>
                        <div className='footTitle'>
                            <h4>Contact us</h4>
                        </div>

                        <div className='footmail'>
                            <p className="footLink">
                                Wechat: MagicCodeEdu
                                <img src="./wechat.jpg" alt="Wechat Code" width="170px" height="170px" />
                            </p>
                        </div>

                        <div className='footmail'>
                            <p>Email: <a className="footLink" href="mailto:magiccodeedu@gmail.com">magiccodeedu@gmail.com</a>
                            </p>
                        </div>


                    </Col>

                    <Col xs={6} lg={3} className='footerBox'>
                        <div className='footTitle'>
                            <h4>About us</h4>
                        </div>

                        <div className='footmail'>
                            <p className="footLink">
                                Wechat Official Account
                                <img src="./gongzhonghao.jpg" alt="Wechat Official Account" width="170px" height="170px" />
                            </p>
                        </div>

                        <div className='footmail'>
                            <p>
                            </p>
                        </div>


                    </Col>



                </Row>
            </Container>

        </>
    )
}

export default Footer
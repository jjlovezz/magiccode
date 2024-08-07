import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <>
           
        <Container id='contact'>
            <Row className='footer'>
                <Col xs={6} lg={3} className='footerBox'>
                    <div className='footMain'>
                        <i className="fab fa-digital-ocean footLogo"></i>
                        
                    </div>
                    
                        <div className='footmail'>
                            <p className="footLink">
                                Wechat: MagicCodeEdu
                                <img src="./wechat.jpg" alt="Wechat Code" width="170px" height="170px"/>
                            </p>
                        </div>
                    
                    <div className='footmail'>
                        <p>Email: <a className="footLink" href="mailto:magiccodeedu@outlook.com">magiccodeedu@outlook.com</a>
                        </p>
                    </div>
                    

                </Col>
                <Col xs={6} lg={3} className='footerBox'>
                    <div className='footTitle'>
                        <h4>Social Media</h4>
                    </div>
                    <ul className='footUl'>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>Twitter</li>
                    </ul>
                </Col>
                <Col xs={6} lg={3} className='footerBox'>
                    <div className='footTitle'>
                        <h4>About us</h4>
                    </div>
                    <ul className='footUl'>
                        <li>Our school</li>
                        <li>Teachers</li>
                        <li>Program</li>
                        <li>Price</li>
                        <li>Ivestors</li>
                    </ul>
                </Col>
                <Col xs={6} lg={3} className='footerBox'>
                    <div className='footTitle'>
                        <h4>Contact us</h4>
                    </div>
                    <ul className='footUl'>
                        <li>Contact</li>
                        <li>Support</li>
                        <li>Franchise</li>
                        <li>Sponsorshps</li>
                        
                    </ul>
                </Col>
                
            </Row>
        </Container>
            
        </>
    )
}

export default Footer
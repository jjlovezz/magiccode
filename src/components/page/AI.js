
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function AI() {
    return (
        <>
            <div className='about'>

                <div className=''>
                    <Link to='/'>
                        <i className="fas fa-times-circle closeIcon"></i>
                    </Link>
                </div>

                <Container className='CoursBoxContainer'>
                    <div >
                        <h2 className='abCourseTitle'>AI <img alt='ai logo' src='./logo_ai.png' width="80" height="80"></img></h2>
                    </div>
                    <Row className='abCourseUl'>
                        <Col md={7}>
                            <div className='CourseDescrAll'>
                                <div className='descriptionTitle'>
                                    About the course
                                </div>
                                <p className='description-title-p'>
                                    Focusing on popular research areas in the field of artificial intelligence, 
                                    such as face recognition, object recognition, pose recognition, speech recognition, 
                                    and intelligent application development based on ChatGPT, 
                                    including chatbots and synonym-antonym converters. 
                                    These initiatives open the door to the world of AI for children.
                                </p>
                            </div>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>

                            <Col xs={12} className='abNum'>
                                Ages: 10-15 years old
                            </Col>
                            <Col xs={12} className='abNum'>
                                Prices:
                                <ul>
                                    <li>- Small group class for 4-6 kids: A$270</li>
                                    <li>- Early bird price:10% off</li>
                                </ul>
                            </Col>
                            <Col xs={12} className='abNum'>
                                Time:
                                <ul>
                                    <li>- 3 hours per day</li>
                                    <li>- 3 consecutive days</li>
                                    <li>- During school holidays</li>
                                </ul>
                            </Col>

                        </Col>

                    </Row>
                    <div>
                        <Row>
                            <Col xs={6} mb={3} md={4}>

                                <div className='abNumlesson' >
                                    <div className='abNumlessonIcon' >
                                        <i className="fas fa-child num-Icon"></i>
                                    </div>
                                    <div className='abNumlessonText' >
                                        Focusing on popular research areas in artificial intelligence
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='abNumlesson' >
                                    <div className='abNumlessonIcon' >
                                        <i className="fas fa-child num-Icon"></i>
                                    </div>
                                    <div className='abNumlessonText' >
                                        Face recognition
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='abNumlesson' >
                                    <div className='abNumlessonIcon' >
                                        <i className="fas fa-child num-Icon"></i>
                                    </div>
                                    <div className='abNumlessonText' >
                                        Object recognition
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='abNumlesson' >
                                    <div className='abNumlessonIcon' >
                                        <i className="fas fa-child num-Icon"></i>
                                    </div>
                                    <div className='abNumlessonText' >
                                        Pose recognition
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='abNumlesson' >
                                    <div className='abNumlessonIcon' >
                                        <i className="fas fa-child num-Icon"></i>
                                    </div>
                                    <div className='abNumlessonText' >
                                        Speech recognition
                                    </div>

                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <div className='abNumlesson' >
                                    <div className='abNumlessonIcon' >
                                        <i className="fas fa-child num-Icon"></i>
                                    </div>
                                    <div className='abNumlessonText' >
                                        ChatGPT
                                    </div>

                                </div>
                            </Col>
                        </Row>

                    </div>

                </Container>

            </div>

        </>
    )
}

export default AI

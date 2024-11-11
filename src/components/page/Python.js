import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Python() {
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
                    <h2 className='abCourseTitle'>Python <img alt='Python logo' src='./logo_python.png' width="80" height="80"></img></h2>
                </div>
                <Row  className='abCourseUl'>
                        <Col md={7}>
                            <div className='CourseDescrAll'>
                                <div className='descriptionTitle'>
                                    About the course
                                </div>
                                <p className='description-title-p'>
                                    Python is the ideal syntax-based programming language for children to learn. 
                                    It helps them grasp the basic concepts of algorithmics and programming, 
                                    while immersing them in the culture and specifics of the IT world.
                                    Children will learn programming fundamentals as well as the Turtle, Tkinter and Pygame libraries, 
                                    and can create catoons, GUIs, and games with Python.
                                </p>
                            </div>
                        </Col>
                        <Col md={{span: 4, offset: 1}}>
                           
                            <Col xs={12} className='abNum'>
                                Ages: 10-15 years old
                            </Col>
                            <Col xs={12} className='abNum'>
                                Prices:
                                    <ul>
                                        <li>- Small group class for 4-6 kids: A$30/lesson</li>
                                        <li>- one-on-two: A$50/lesson</li>
                                        <li>- one-on-one: A$80/lesson</li>
                                    </ul>
                            </Col>
                            <Col xs={12} className='abNum'>
                                Time:
                                    <ul>
                                        <li>- 1 hour per lesson</li>
                                        <li>- 1 lesson per week</li>
                                        <li>- 10 lessons per term</li>
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
                                    Programming with Python
                                </div>

                                </div>
                            </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Learn programming fundamentals
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Learn Turtle/Tkinter/PygameS
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Design algorithms
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Enhance logical thinking
                                </div>

                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                            <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Improve innovation capacity
                                </div>

                            </div>
                        </Col>
                    </Row>

                </div>
                {/* <div className='co-button'>
                    <button className='bigBtn'>Get free lesson</button>
                </div> */}
            </Container>

    </div>
            
        </>
    )
}

export default Python
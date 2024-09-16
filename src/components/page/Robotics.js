
import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Robotics() {
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
                    <h2 className='abCourseTitle'>Robotics</h2>
                </div>
                <Row  className='abCourseUl'>
                        <Col md={7}>
                            <div className='CourseDescrAll'>
                                <div className='descriptionTitle'>
                                    About the course
                                </div>
                                <p className='description-title-p'>
                                    The BBC micro:bit is an award-winning programmable device 
                                    that allows students to get hands-on with coding and digital making. 
                                    During school holidays, we will teach children the micro:bit-based robotics programming courses.
                                    These courses focus on learning the principles of various sensors 
                                    and methods of hardware-software collaborative programming, 
                                    perfectly embodying the STEM education philosophy. 
                                </p>
                            </div>
                        </Col>
                        <Col md={{span: 4, offset: 1}}>
                           
                            <Col xs={12} className='abNum'>
                                8-15 years old
                            </Col>
                            <Col xs={12} className='abNum'>
                                6 kids in each class
                            </Col>
                            <Col xs={12} className='abNum'>
                                3-day shifts and 3 hours per day
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
                                    Electronic circuit programming
                                </div>

                                </div>
                            </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Building block robot programming
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Robot car programming
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Recognise the power of technology in the real world
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Think over the algorithm of creating their own projects
                                </div>

                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                            <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Present their work and speak publicly
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

export default Robotics 

import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Scratch() {
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
                    <h2 className='abCourseTitle'>Scratch <img alt='Scratch logo' src='./logo_scratch.png' width="80" height="80"></img></h2>
                </div>
                <Row  className='abCourseUl'>
                        <Col md={7}>
                            <div className='CourseDescrAll'>
                                <div className='descriptionTitle'>
                                    About the course
                                </div>
                                <p className='description-title-p'>
                                    Visual programming on Scratch develops children's imagination, 
                                    teaches them to set tasks correctly, 
                                    and look for opportunities to solve problems in a playful way. 
                                    In addition to working on the computer, 
                                    children draw, count, invent, design in groups, and give presentations.   
                                    Children can create a game or an animation in one or two lessons.         
                                </p>
                            </div>
                        </Col>
                        <Col md={{span: 4, offset: 1}}>
                           
                            <Col xs={12} className='abNum'>
                                8-12 years old
                            </Col>
                            <Col xs={12} className='abNum'>
                                6 kids in each class
                            </Col>
                            <Col xs={12} className='abNum'>
                                1 lesson per week
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
                                    Programming with Scratch
                                </div>

                                </div>
                            </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Create cartoons and games
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Apply the basic concepts of programming and algorithmics
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Work in team
                                </div>
                                
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                                <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Design creatively
                                </div>

                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='abNumlesson' >
                            <div className='abNumlessonIcon' >
                                    <i className="fas fa-child num-Icon"></i>
                                </div>
                                <div className='abNumlessonText' >
                                    Think logically
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

export default Scratch
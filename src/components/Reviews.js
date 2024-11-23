
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';

function Reviews() {

    return (
        <>
            <Container fluid className='coursesBlock'>
                <p>The information is sourced from Google Maps reviews written by the parents of our students.</p>

                <Container>
                    <Row className='headcomp'>

                        <Swiper
                            spaceBetween={40}
                            slidesPerView={3}
                            breakpoints={{
                                0: {
                                    // width: 340,
                                    slidesPerView: 1,
                                },
                                768: {
                                    //   width: 768,
                                    slidesPerView: 1,
                                },
                                1140: {
                                    // width: 1140,
                                    slidesPerView: 2,
                                },

                            }}
                            autoplay={{ delay: 3000 }}

                        >
                            <SwiperSlide>

                                <div className='review'>
                                    <div className='review-text'>
                                        My daughters had an amazing experience with this coding class! The teacher Maggie is knowledgeable, patient, and making learning complex concepts so easy to understand. The lessons are well-structured, and the hands-on projects really helped the girls solidify what they are learning. They came into the class with zero experience, and now they are confident in the coding abilities. Highly recommend to anyone interested in coding!
                                    </div>

                                    <div className='reviewPerson'>
                                        <div className='reviewPersonAvatar'><img alt='Client Jenny' src='./client_jenny.png'></img></div>
                                        <div className='reviewPersonInfo'>
                                            <div className='reviewPersonName'>Jenny</div>
                                            {
                                                //<div className='reviewPersonJob'>Manager</div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>

                                <div className='review'>
                                    <div className='review-text'>
                                        Highly recommended! Teacher Maggie is very serious and responsible, and the class is lively and interesting. The children especially like the courses arranged by the teacher. They can complete a project every time they attend class, which gives the children a special sense of accomplishment.
                                    </div>

                                    <div className='reviewPerson'>
                                        <div className='reviewPersonAvatar'><img alt='Client Suqiong' src='./client_suqiong.png'></img></div>
                                        <div className='reviewPersonInfo'>
                                            <div className='reviewPersonName'>Suqiong</div>

                                            {
                                                //<div className='reviewPersonJob'>Manager</div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>

                                <div className='review'>
                                    <div className='review-text'>
                                        My son likes coding and has been studying at Magic Code for a year. He particularly likes the three-day holiday class and will definitely come back next term break!
                                    </div>

                                    <div className='reviewPerson'>
                                        <div className='reviewPersonAvatar'><img alt='Client Christal' src='./client_christal.png'></img></div>
                                        <div className='reviewPersonInfo'>
                                            <div className='reviewPersonName'>Christal</div>

                                            {
                                                //<div className='reviewPersonJob'>Manager</div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>

                                <div className='review'>
                                    <div className='review-text'>
                                        My daughter has been taking classes at Magic Code for several years. She loves both the online classes and the 3-day course during the school holidays.
                                    </div>

                                    <div className='reviewPerson'>
                                        <div className='reviewPersonAvatar'><img alt='Client Echo' src='./client_echo.png'></img></div>
                                        <div className='reviewPersonInfo'>
                                            <div className='reviewPersonName'>Echo</div>
                                            {
                                                //<div className='reviewPersonJob'>Worker</div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>

                                <div className='review'>
                                    <div className='review-text'>
                                        My both kids attended three days holiday program. Absolutely love it! Definitely will come back next term break! Maggie and Jimmy both are super nice and approachable! Keep up the wonderful work!
                                    </div>

                                    <div className='reviewPerson'>
                                        <div className='reviewPersonAvatar'><img alt='Client Lin' src='./client_lin.png'></img></div>
                                        <div className='reviewPersonInfo'>
                                            <div className='reviewPersonName'>Lin</div>
                                            {
                                                //<div className='reviewPersonJob'>Nurse</div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                        </Swiper>

                    </Row>

                </Container>

            </Container>
        </>
    )
}

export default Reviews